# SiKeuchik - Manajemen Administrasi Kependudukan di  kantor keuchik

## IMPORTANT 
akun admin cuma 1 :
- email    : affan@test.com
- password : 123

sample Warga ( Nanti bisa ditambah manual oleh Admin )
- no Nik : 1234567891234567
- no KK  : 1234567891234567

## Fitur Utama
✅ Pengajuan surat online (Domisili, Usaha, Belum Menikah, Tidak Mampu)  
✅ Tracking status pengajuan (Diajukan - Diproses - Selesai/Ditolak)  
✅ Manajemen dokumen digital  
✅ Antarmuka admin dan warga  

## Teknologi
- **Frontend**: Next.js 14 + Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Postgre ( supabase )
- **ORM**: Prisma
- **Authentication**: NextAuth.js

## 🚀 Instalasi Cepat

1. **Clone repository**:
   ```bash
   git clone https://github.com/affanshdr/E-Petani.git
   cd E-Petani
2. **Install dependencies**:
   ```bash
   npm install
3. **Jalankan migrasi database**:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate```
4. **Cara menjalankan**:
   ```bash
   npm run dev
5. **Database GUI:**:
   ```bash
   npx prisma studio

