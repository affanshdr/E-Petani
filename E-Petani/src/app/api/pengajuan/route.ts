import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

// Helper functions
function validateFields(fields: Record<string, any>) {
  const requiredFields = ["jenis_surat", "no_kk", "no_nik", "nama_lengkap", "alamat", "KTP", "KK"];

  const missingFields = requiredFields.filter((field) => !fields[field]);
  if (missingFields.length > 0) {
    throw new Error(`Field wajib tidak lengkap: ${missingFields.join(", ")}`);
  }

  if (!/^\d{16}$/.test(fields.no_nik)) {
    throw new Error("NIK harus 16 digit angka");
  }

  if (!/^\d{16}$/.test(fields.no_kk)) {
    throw new Error("Nomor KK harus 16 digit angka");
  }
}

async function generateNomorPengajuan(jenisSurat: string): Promise<string> {
  const prefixes: Record<string, string> = {
    "Surat Keterangan Domisili": "SD",
    "Surat Keterangan Usaha": "IU",
    "Surat Keterangan Belum Menikah": "BM",
    "Surat Keterangan Tidak Mampu": "TM",
  };

  const prefix = prefixes[jenisSurat] || "SRT";

  // Cari nomor urut terakhir dari database
  const lastPengajuan = await prisma.pengajuanSurat.findFirst({
    where: {
      jenis_surat: jenisSurat,
    },
    orderBy: {
      id: "desc",
    },
    select: {
      no_pengajuan: true,
    },
  });

  // Ekstrak nomor urut terakhir
  let nextNumber = 1;
  if (lastPengajuan?.no_pengajuan) {
    const lastNumber = parseInt(lastPengajuan.no_pengajuan.split("_")[1]);
    if (!isNaN(lastNumber)) {
      nextNumber = lastNumber + 1;
    }
  }

  return `${prefix}_${String(nextNumber).padStart(4, "0")}`;
}

async function processFile(file: File): Promise<string> {
  const uploadDir = path.join(process.cwd(), "public/uploads");
  await fs.mkdir(uploadDir, { recursive: true });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const ext = file.name.split(".").pop();
  const filename = `${uuidv4()}.${ext}`;
  const filepath = path.join(uploadDir, filename);

  await fs.writeFile(filepath, buffer);
  return `/uploads/${filename}`;
}

// Main API handlers
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Process file uploads
    const fileFields = {
      KTP: formData.get("KTP") as File | null,
      KK: formData.get("KK") as File | null,
      "Surat Pengantar RT/RW": formData.get("Surat Pengantar RT/RW") as File | null,
      "Surat Permohonan Bermaterai": formData.get("Surat Permohonan Bermaterai") as File | null,
      "Izin Usaha": formData.get("Izin Usaha") as File | null,
      "Pernyataan Tidak Mampu": formData.get("Pernyataan Tidak Mampu") as File | null,
      "Tagihan Listrik": formData.get("Tagihan Listrik") as File | null,
      "Pas Foto": formData.get("Pas Foto") as File | null,
    };

    const processedFiles: Record<string, string> = {};
    for (const [key, file] of Object.entries(fileFields)) {
      if (file && file.size > 0) {
        processedFiles[key] = await processFile(file);
      }
    }

    // Extract form fields
    const formFields = {
      jenis_surat: formData.get("jenis_surat") as string,
      no_kk: formData.get("no_kk") as string,
      no_nik: formData.get("no_nik") as string,
      nama_lengkap: formData.get("nama_lengkap") as string,
      alamat: formData.get("alamat") as string,
      keterangan: (formData.get("keterangan") as string) || "",
    };

    // Validate before processing
    validateFields({ ...formFields, ...processedFiles });

    // Generate document number
    const no_pengajuan = await generateNomorPengajuan(formFields.jenis_surat);

    // Save to database
    const pengajuan = await prisma.pengajuanSurat.create({
      data: {
        no_pengajuan,
        jenis_surat: formFields.jenis_surat,
        no_kk: formFields.no_kk,
        no_nik: formFields.no_nik,
        nama_lengkap: formFields.nama_lengkap,
        alamat: formFields.alamat,
        keterangan: formFields.keterangan,
        status: "diajukan",
        tanggal_pengajuan: new Date(),
        file_ktp: processedFiles.KTP || null,
        file_kk: processedFiles.KK || null,
        file_pengantar_rtrw: processedFiles["Surat Pengantar RT/RW"] || null,
        file_surat_permohonan: processedFiles["Surat Permohonan Bermaterai"] || null,
        file_izin_usaha: processedFiles["Izin Usaha"] || null,
        file_pernyataan_tm: processedFiles["Pernyataan Tidak Mampu"] || null,
        file_rekening_listrik: processedFiles["Tagihan Listrik"] || null,
        file_pas_foto: processedFiles["Pas Foto"] || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: pengajuan,
        nomor_pengajuan: no_pengajuan,
        message: "Pengajuan berhasil dibuat",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        message: error.message.includes("wajib") ? error.message : error.message.includes("digit") ? error.message : "Terjadi kesalahan saat membuat pengajuan",
      },
      {
        status: error.message.includes("wajib") || error.message.includes("digit") ? 400 : 500,
      }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";

    const whereClause = search
      ? {
          OR: [{ no_pengajuan: { contains: search } }, { no_nik: { contains: search } }],
        }
      : {};

    const [data, total] = await Promise.all([
      prisma.pengajuanSurat.findMany({
        where: whereClause,
        orderBy: { tanggal_pengajuan: "desc" },
        take: limit,
        skip: (page - 1) * limit,
        select: {
          id: true,
          no_pengajuan: true,
          no_nik: true,
          nama_lengkap: true,
          jenis_surat: true,
          status: true,
          tanggal_pengajuan: true,
          file_ktp: true,
          file_kk: true,
          file_pengantar_rtrw: true,
          file_surat_permohonan: true,
          file_izin_usaha: true,
          file_pernyataan_tm: true,
          file_rekening_listrik: true,
          file_pas_foto: true,
          
        }
        
      }),
      prisma.pengajuanSurat.count({ where: whereClause }),
    ]);

    return NextResponse.json({
      success: true,
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching pengajuan:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
        message: "Gagal mengambil data pengajuan",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const body = await request.json();

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "ID pengajuan diperlukan",
          message: "ID pengajuan tidak valid",
        },
        { status: 400 }
      );
    }

    const allowedUpdates = ["status", "keterangan"];
    const updateData: Record<string, any> = {};

    allowedUpdates.forEach((field) => {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
      }
    });

    if (body.status === "selesai") {
      updateData.tanggal_selesai = new Date();
    }

    const updated = await prisma.pengajuanSurat.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      data: updated,
      message: "Status pengajuan berhasil diperbarui",
    });
  } catch (error) {
    console.error("Error updating pengajuan:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
        message: "Gagal memperbarui pengajuan",
      },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  return NextResponse.json(
    {
      success: false,
      error: "Method Not Allowed",
      message: "Metode DELETE tidak didukung",
    },
    { status: 405 }
  );
}
