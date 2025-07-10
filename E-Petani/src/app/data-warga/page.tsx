"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavbarAdmin from "@/components/NavbarAdmin";

interface Warga {
  id: number;
  nama_lengkap: string;  // Changed from 'nama' to 'nama_lengkap'
  no_nik: string;
  no_kk: string;
  alamat: string;
}

export default function DataWarga() {
  const [searchQuery, setSearchQuery] = useState("");
  const [wargaData, setWargaData] = useState<Warga[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data-warga");
        if (!response.ok) {
          throw new Error("Gagal memuat data");
        }
        const data = await response.json();
        setWargaData(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Terjadi kesalahan");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Apakah Anda yakin ingin menghapus data ini?")) return;
  
    try {
      const response = await fetch(`/api/data-warga/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Gagal menghapus data");
      }
  
      setWargaData(wargaData.filter((warga) => warga.id !== id));
      alert("Data berhasil dihapus");
    } catch (error) {
      console.error("Delete error:", error);
      alert(error instanceof Error ? error.message : "Terjadi kesalahan");
    }
  };

  const filteredData = wargaData.filter(
    (warga) =>
      warga.nama_lengkap.toLowerCase().includes(searchQuery.toLowerCase()) ||
      warga.no_nik.includes(searchQuery) ||
      warga.no_kk.includes(searchQuery)
  );

  return (
    <div
      style={{ fontFamily: "var(--font-poppins)" }}
      className="min-h-screen bg-gradient-to-br from-yellow-50 to-white font-sans flex"
    >
      <NavbarAdmin currentPath="/data-warga" />

      <div className="flex-1 p-8 overflow-auto ml-64">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mr-4">Data Warga</h2>
          <button
            onClick={() => router.push("/data-warga/tambah")}
            className="bg-[#FFD233] hover:bg-[#E6BD2E] text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
          >
            <span className="mr-1">+</span> Tambah Data
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="mb-6">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Cari Data Warga"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD233] focus:border-[#FFD233] bg-white outline-none transition text-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFD233]"></div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#FFE08A]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Nama
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      NIK
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      No KK
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Alamat
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.map((warga) => (
                    <tr key={warga.id} className="hover:bg-[#FFF5D9]">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {warga.nama_lengkap}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {warga.no_nik}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {warga.no_kk}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {warga.alamat}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex gap-3">
                          <button
                            onClick={() =>
                              router.push(`/data-warga/${warga.id}/edit`)
                            }
                            className="px-5 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full hover:from-blue-500 hover:to-blue-600 transition-colors"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(warga.id)}
                            className="px-5 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-full hover:from-red-500 hover:to-red-600 transition-colors"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
