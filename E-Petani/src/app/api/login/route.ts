import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

export async function POST(request: Request) {
    try {
      const { email, password } = await request.json()
  
      // Cari admin dengan email dan password yang sesuai
      const admin = await prisma.admin.findFirst({
        where: {
          email,
          password // Note nanti hash
        }
      })
  
      if (!admin) {
        return NextResponse.json(
          { error: 'Email atau password salah' },
          { status: 401 }
        )
      }
  
      // Kembalikan data admin tanpa password
      const { password: _, ...adminData } = admin
      return NextResponse.json(adminData)
  
    } catch (error) {
      return NextResponse.json(
        { error: 'Terjadi kesalahan saat login' },
        { status: 500 }
      )
    }
  }