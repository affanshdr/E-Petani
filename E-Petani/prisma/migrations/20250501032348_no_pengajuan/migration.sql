/*
  Warnings:

  - You are about to drop the column `no_surat` on the `PengajuanSurat` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PengajuanSurat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama_lengkap" TEXT NOT NULL,
    "no_nik" TEXT NOT NULL,
    "no_kk" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "keterangan" TEXT NOT NULL,
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
    "no_pengajuan" TEXT,
    "tanggal_pengajuan" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tanggal_selesai" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_PengajuanSurat" ("alamat", "createdAt", "file_izin_usaha", "file_kk", "file_ktp", "file_pas_foto", "file_pengantar_rtrw", "file_pernyataan_tm", "file_rekening_listrik", "file_surat_permohonan", "id", "jenis_surat", "keterangan", "nama_lengkap", "no_kk", "no_nik", "status", "tanggal_pengajuan", "tanggal_selesai") SELECT "alamat", "createdAt", "file_izin_usaha", "file_kk", "file_ktp", "file_pas_foto", "file_pengantar_rtrw", "file_pernyataan_tm", "file_rekening_listrik", "file_surat_permohonan", "id", "jenis_surat", "keterangan", "nama_lengkap", "no_kk", "no_nik", "status", "tanggal_pengajuan", "tanggal_selesai" FROM "PengajuanSurat";
DROP TABLE "PengajuanSurat";
ALTER TABLE "new_PengajuanSurat" RENAME TO "PengajuanSurat";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
