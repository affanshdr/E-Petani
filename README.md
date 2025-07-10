# SiKeuchik - Manajemen Administrasi Kependudukan di  kantor keuchik

## IMPORTANT 
akun admin cuma 1 :
- email    : affan@test.com
- password : 123

sample Warga ( Nanti bisa ditambah manual oleh Admin )
- no Nik : 1234567891234567
- no KK  : 1234567891234567

**Anggota** :

1. Affan Suhendar (2308107010003)

2. Muhammad Aidil Fitrah (2308107010035)

3. Zalvia Inasya Zulna (2308107010041)

4. Raysha Tazkiya Rahim (2308107010057)

5. Shania Rizka Anindia (2308107010067)



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
   git clone https://github.com/affanshdr/SIMAK.git
   cd simak
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

