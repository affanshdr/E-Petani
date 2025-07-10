// src/app/api/template-surat/route.ts
import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

// GET: Mengambil semua template surat
export async function GET() {
  try {
    const templates = await prisma.templateSurat.findMany();
    return NextResponse.json(templates);
  } catch (error) {
    console.error('Error fetching templates:', error);
    return NextResponse.json(
      { error: 'Gagal mengambil data' },
      { status: 500 }
    );
  }
}

// PUT: Memperbarui template surat yang ada
export async function PUT(request: Request) {
  try {
    const updated = await request.json();
    
    // Pastikan terakhirDiubah dalam format yang benar untuk DateTime
    const terakhirDiubah = new Date();
    
    const updatedTemplate = await prisma.templateSurat.update({
      where: { id: updated.id },
      data: {
        judul: updated.judul,
        terakhirDiubah: terakhirDiubah
      }
    });
    
    return NextResponse.json(updatedTemplate);
  } catch (error) {
    console.error('Error updating template:', error);
    return NextResponse.json(
      { error: 'Gagal memperbarui data' },
      { status: 500 }
    );
  }
}

// POST: Membuat template surat baru
export async function POST(request: Request) {
  try {
    const newTemplate = await request.json();
    
    // Buat slug dari judul untuk id (pastikan unique)
    const baseId = newTemplate.judul.toLowerCase().replace(/\s+/g, '-');
    const timestamp = Date.now().toString().slice(-4); // Tambahkan 4 digit timestamp untuk menghindari duplikasi
    const id = `${baseId}-${timestamp}`;
    const terakhirDiubah = new Date();
    
    const createdTemplate = await prisma.templateSurat.create({
      data: {
        id: id,
        judul: newTemplate.judul,
        terakhirDiubah: terakhirDiubah
      }
    });
    
    return NextResponse.json(createdTemplate);
  } catch (error) {
    console.error('Error creating template:', error);
    return NextResponse.json(
      { error: 'Gagal menambahkan data' },
      { status: 500 }
    );
  }
}

// DELETE: Menghapus template surat
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    
    await prisma.templateSurat.delete({
      where: { id }
    });
    
    // Ambil data terbaru setelah penghapusan
    const templates = await prisma.templateSurat.findMany();
    
    return NextResponse.json(templates);
  } catch (error) {
    console.error('Error deleting template:', error);
    return NextResponse.json(
      { error: 'Gagal menghapus data' },
      { status: 500 }
    );
  }
}