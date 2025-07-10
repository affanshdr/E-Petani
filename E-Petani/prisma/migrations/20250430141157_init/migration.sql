-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TemplateSurat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "judul" TEXT NOT NULL,
    "terakhirDiubah" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PengajuanSurat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama_lengkap" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "no_kk" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "keterangan" TEXT,
    "jenis_surat" TEXT NOT NULL,
    "file_ktp" TEXT,
    "file_kk" TEXT,
    "file_pengantar_rtrw" TEXT,
    "file_surat_permohonan" TEXT,
    "file_izin_usaha" TEXT,
    "file_pas_foto" TEXT,
    "file_pernyataan_tm" TEXT,
    "file_rekening_listrik" TEXT,
    "status" TEXT NOT NULL DEFAULT 'diajukan',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
