import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const no_nik = searchParams.get('no_nik');
    const no_kk = searchParams.get('no_kk');

    if (!no_nik && !no_kk) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing parameters',
          message: 'Please provide either no_nik or no_kk',
        },
        { status: 400 }
      );
    }

    let warga;

    // Jika ada NIK dan KK
    if (no_nik && no_kk) {
      warga = await prisma.warga.findFirst({
        where: {
          no_nik,
          no_kk,
        },
      });

      return NextResponse.json({
        success: true,
        exists: !!warga,
        is_match: !!warga,
        data: warga || null,
      });
    }

    // Jika hanya NIK
    if (no_nik) {
      warga = await prisma.warga.findUnique({
        where: { no_nik },
      });

      return NextResponse.json({
        success: true,
        exists: !!warga,
        is_match: !!warga,
        data: warga || null,
      });
    }

    // Jika hanya KK
    if (no_kk) {
      warga = await prisma.warga.findFirst({
        where: { no_kk },
      });

      return NextResponse.json({
        success: true,
        exists: !!warga,
        data: warga || null,
      });
    }
  } catch (error: any) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Server error',
        message: error.message || 'Internal error',
      },
      { status: 500 }
    );
  }
}
