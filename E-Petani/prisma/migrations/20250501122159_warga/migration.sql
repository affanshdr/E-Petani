-- CreateTable
CREATE TABLE "Warga" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "no_nik" TEXT NOT NULL,
    "no_kk" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Warga_no_nik_key" ON "Warga"("no_nik");
