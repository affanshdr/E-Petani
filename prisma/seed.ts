// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const templateData = [
  {
    judul: 'Surat Keterangan Kurang Mampu',
    terakhirDiubah: new Date('2024-04-12'),
    warna: '#BDB176',
    warnaBtn: '#EBDDC6'
  },
  {
    judul: 'Surat Keterangan Belum Menikah',
    terakhirDiubah: new Date('2024-04-12'),
    warna: '#68BAA6',
    warnaBtn: '#C6EDD9'
  },
  {
    judul: 'Surat Keterangan Kehilangan',
    terakhirDiubah: new Date('2024-04-12'),
    warna: '#797A9E',
    warnaBtn: '#C6EDD9'
  },
  {
    judul: 'Surat Keterangan Usaha',
    terakhirDiubah: new Date('2024-04-12'),
    warna: '#D9B4A9',
    warnaBtn: '#E9E9C7'
  }
];

async function main() {
  console.log('Mulai seeding...');
  
  // Hapus semua data existing (optional)
  await prisma.templateSurat.deleteMany();
  
  // Tambahkan data baru
  for (const template of templateData) {
    await prisma.templateSurat.create({
      data: template
    });
  }
  
  console.log('Seeding selesai!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });