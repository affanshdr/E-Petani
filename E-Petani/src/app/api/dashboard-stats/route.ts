import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // 1. Hitung jumlah pengguna unik berdasarkan no_nik
    const penggunaUnik = await prisma.pengajuanSurat.findMany({
      select: { no_nik: true },
      distinct: ['no_nik']
    });
    const totalPengguna = penggunaUnik.length;

    // 2. Hitung semua surat (surat masuk)
    const totalMasuk = await prisma.pengajuanSurat.count();

    // 3. Hitung surat keluar (ditolak atau diterima)
    const totalKeluar = await prisma.pengajuanSurat.count({
      where: {
        status: {
          in: ['ditolak', 'diterima']
        }
      }
    });

    return NextResponse.json({
      success: true,
      data: {
        masuk: totalMasuk,
        keluar: totalKeluar,
        pengguna: totalPengguna
      }
    });
  } catch (error) {
    console.error('Gagal mengambil statistik dashboard:', error);
    return NextResponse.json({
      success: false,
      message: 'Gagal mengambil data statistik'
    }, { status: 500 });
  }
}
