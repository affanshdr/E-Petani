/*
  Warnings:

  - You are about to drop the column `nik` on the `PengajuanSurat` table. All the data in the column will be lost.
  - Added the required column `no_nik` to the `PengajuanSurat` table without a default value. This is not possible if the table is not empty.

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
INSERT INTO "new_PengajuanSurat" ("alamat", "createdAt", "file_izin_usaha", "file_kk", "file_ktp", "file_pas_foto", "file_pengantar_rtrw", "file_pernyataan_tm", "file_rekening_listrik", "file_surat_permohonan", "id", "jenis_surat", "keterangan", "nama_lengkap", "no_kk", "status") SELECT "alamat", "createdAt", "file_izin_usaha", "file_kk", "file_ktp", "file_pas_foto", "file_pengantar_rtrw", "file_pernyataan_tm", "file_rekening_listrik", "file_surat_permohonan", "id", "jenis_surat", "keterangan", "nama_lengkap", "no_kk", "status" FROM "PengajuanSurat";
DROP TABLE "PengajuanSurat";
ALTER TABLE "new_PengajuanSurat" RENAME TO "PengajuanSurat";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
