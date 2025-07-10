import { NextResponse } from "next/server";
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const warga = await prisma.warga.findMany();
    return NextResponse.json(warga);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data warga" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validasi
    if (!body.nama_lengkap || !body.no_nik || !body.no_kk || !body.alamat) {
      return NextResponse.json(
        { error: "Semua field harus diisi" },
        { status: 400 }
      );
    }

    // Cek duplikasi NIK
    const existingWarga = await prisma.warga.findUnique({
      where: { no_nik: body.no_nik },
    });

    if (existingWarga) {
      return NextResponse.json(
        { error: "NIK sudah terdaftar" },
        { status: 400 }
      );
    }

    // Buat data baru
    const newWarga = await prisma.warga.create({
      data: {
        nama_lengkap: body.nama_lengkap,
        no_nik: body.no_nik,
        no_kk: body.no_kk,
        alamat: body.alamat,
      },
    });

    return NextResponse.json(newWarga, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal menambahkan data warga" },
      { status: 500 }
    );
  }
}