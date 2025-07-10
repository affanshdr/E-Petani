/*
  Warnings:

  - The primary key for the `TemplateSurat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `terakhirDiubah` on the `TemplateSurat` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to drop the column `nama` on the `Warga` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `TemplateSurat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `warna` to the `TemplateSurat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `warnaBtn` to the `TemplateSurat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_lengkap` to the `Warga` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TemplateSurat" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "judul" TEXT NOT NULL,
    "terakhirDiubah" DATETIME NOT NULL,
    "warna" TEXT NOT NULL,
    "warnaBtn" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_TemplateSurat" ("id", "judul", "terakhirDiubah") SELECT "id", "judul", "terakhirDiubah" FROM "TemplateSurat";
DROP TABLE "TemplateSurat";
ALTER TABLE "new_TemplateSurat" RENAME TO "TemplateSurat";
CREATE TABLE "new_Warga" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama_lengkap" TEXT NOT NULL,
    "no_nik" TEXT NOT NULL,
    "no_kk" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Warga" ("alamat", "createdAt", "id", "no_kk", "no_nik", "updatedAt") SELECT "alamat", "createdAt", "id", "no_kk", "no_nik", "updatedAt" FROM "Warga";
DROP TABLE "Warga";
ALTER TABLE "new_Warga" RENAME TO "Warga";
CREATE UNIQUE INDEX "Warga_no_nik_key" ON "Warga"("no_nik");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");
