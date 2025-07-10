import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

// GET
export async function GET() {
  try {
    const admins = await prisma.admin.findMany()
    return NextResponse.json(admins)
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data" },
      { status: 500 }
    )
  }
}




