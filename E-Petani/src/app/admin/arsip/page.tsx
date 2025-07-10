"use client";

import { useState, useEffect } from "react";
import { FiPrinter, FiSearch } from "react-icons/fi";
import NavbarAdmin from "../../../components/NavbarAdmin";

interface SuratItem {
  id: number;
  no_pengajuan: string;
  jenis_surat: string;
  tanggal_pengajuan: string;
  nama_lengkap: string;
  status: string;
}

export default function PengajuanMasukPage() {
  const [arsipSurat, setArsipSurat] = useState<SuratItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [jenisSurat, setJenisSurat] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [bulan, setBulan] = useState<string>("");

  const jenisSuratOptions = [
    "Semua Jenis Surat",
    "Keterangan Kurang Mampu",
    "Surat Keterangan Domisili",
    "Surat Keterangan Usaha",
    "Surat Keterangan Tidak Mampu",
  ];

  const statusOptions = ["Semua Status", "diajukan", "diproses", "selesai"];

  const bulanOptions = [
    "Semua Bulan",
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/pengajuan");
        const result = await response.json();
        setArsipSurat(result.data || []);
      } catch (error) {
        console.error("Gagal mengambil data pengajuan", error);
      }
    };

    fetchData();
  }, []);

  const handleReset = () => {
    setJenisSurat("");
    setStatus("");
    setBulan("");
  };

  const filteredSurat = arsipSurat.filter((surat) => {
    const namaCocok = surat.nama_lengkap
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const nomorCocok = surat.no_pengajuan
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const jenisCocok =
      !jenisSurat || jenisSurat === "Semua Jenis Surat" || surat.jenis_surat === jenisSurat;
    const statusCocok =
      !status || status === "Semua Status" || surat.status.toLowerCase() === status.toLowerCase();

    const bulanCocok =
      !bulan || bulan === "Semua Bulan" ||
      new Date(surat.tanggal_pengajuan).toLocaleString("id-ID", { month: "long" }) === bulan;

    return (namaCocok || nomorCocok) && jenisCocok && statusCocok && bulanCocok;
  });

  return (
    <div className="flex min-h-screen bg-yellow-100">
      <NavbarAdmin currentPath="/Admin/arsip" />
      <main className="flex-1 p-15 ml-64" style={{ fontFamily: "var(--font-poppins)" }}>
        <div className="flex justify-between items-center mb-10">
          <div className="relative w-full max-w-md shadow-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari Nama / Nomor Surat . . ."
              className="w-full pl-4 pr-10 py-3 border bg-white border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-700"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Filter */}
        <div className="p-4 rounded-xl mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select
              value={jenisSurat}
              onChange={(e) => setJenisSurat(e.target.value)}
              className="p-3 bg-blue-900 text-white rounded-full shadow-md"
            >
              {jenisSuratOptions.map((option) => (
                <option key={option} value={option} className="bg-blue-900">
                  {option}
                </option>
              ))}
            </select>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="p-3 bg-blue-900 text-white rounded-full shadow-md"
            >
              {statusOptions.map((option) => (
                <option key={option} value={option} className="bg-blue-900">
                  {option}
                </option>
              ))}
            </select>
            <select
              value={bulan}
              onChange={(e) => setBulan(e.target.value)}
              className="p-3 bg-blue-900 text-white rounded-full shadow-md"
            >
              {bulanOptions.map((option) => (
                <option key={option} value={option} className="bg-blue-900">
                  {option}
                </option>
              ))}
            </select>
            <button
              onClick={handleReset}
              className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-full shadow-md"
            >
              Reset Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nomor Surat</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Jenis Surat</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tanggal Arsip</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama Pemohon</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSurat.map((surat) => (
                  <tr key={surat.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{surat.no_pengajuan}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{surat.jenis_surat}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(surat.tanggal_pengajuan).toLocaleDateString("id-ID")}
                      
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{surat.nama_lengkap}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          surat.status === "selesai"
                            ? "text-green-600"
                            : surat.status === "diajukan"
                            ? "text-blue-600"
                            : surat.status === "diproses"
                            ? "text-yellow-600"
                            : "text-rose-500"
                            
                        }`}
                      >
                        ● {surat.status.charAt(0).toUpperCase() + surat.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <button onClick={() => window.open(`/api/pengajuan/${surat.id}/cetak`, "_blank")} className="flex items-center gap-2 px-3 py-2 rounded-md bg-yellow-600 hover:bg-yellow-700 text-white transition-colors">
                        <FiPrinter className="w-4 h-4" />
                        <span>Cetak</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredSurat.length === 0 && (
              <div className="text-center py-6 text-gray-500">Data tidak ditemukan.</div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}