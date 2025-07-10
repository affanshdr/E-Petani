"use client";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

interface Pengajuan {
  id: number;
  no_pengajuan: string;
  no_nik: string; // Added no_nik property
  nama_lengkap: string;
  jenis_surat: string;
  status: string;
  tanggal_pengajuan: string;
}

// Warna Font
const font = 'text-gray-600';

export default function LacakPengajuan() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Pengajuan[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 10;

  const fetchPengajuan = async (page: number, query: string = "") => {
    setIsLoading(true);
    try {
      let url = `/api/pengajuan?page=${page}&limit=${itemsPerPage}`;
      if (query) {
        url += `&search=${query}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      
      if (response.ok) {
        setSearchResults(data.data);
        setTotalPages(data.meta.totalPages);
      } else {
        console.error("Error fetching data:", data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPengajuan(currentPage);
  }, [currentPage]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchPengajuan(1, searchQuery);
  };

  const getStatusBadge = (status: string) => {
    const baseClass = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium";
    
    switch(status.toLowerCase()) {
      case 'diproses':
        return (
          <span className={`${baseClass} bg-yellow-100 text-yellow-800`}>
            <span className="w-2.5 h-2.5 mr-2 bg-yellow-500 rounded-full"></span>
            {status}
          </span>
        );
      case 'diajukan':
        return (
          <span className={`${baseClass} bg-blue-100 text-blue-800`}>
            <span className="w-2.5 h-2.5 mr-2 bg-blue-500 rounded-full"></span>
            {status}
          </span>
        );
      case 'selesai':
        return (
          <span className={`${baseClass} bg-green-100 text-green-800`}>
            <span className="w-2.5 h-2.5 mr-2 bg-green-500 rounded-full"></span>
            {status}
          </span>
        );
      default:
        return (
          <span className={`${baseClass} bg-gray-100 text-gray-800`}>
            <span className="w-2.5 h-2.5 mr-2 bg-gray-500 rounded-full"></span>
            {status}
          </span>
        );
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="px-6 mt-10 flex flex-col md:flex-row justify-between items-center ml-10 mr-10">
        <div className="ml-10 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-4 text-orange-600">LACAK PENGAJUANMU !</h1>
          <p className="text-gray-600">
            Layanan Pengurusan Surat Desa Kopelma Darussalam
          </p>

          <form onSubmit={handleSearch} className="flex gap-4 mt-6">
            <input
              type="text"
              placeholder="Masukkan NIK atau No Tracking"
              className="flex-grow p-3 border border-gray-600 rounded-lg text-gray-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Mencari...' : 'Lacak'}
            </button>
          </form>
        </div>
        <img src="/pengajuan.png" alt="Surat" className="w-150 h-120 mr-2" />
      </div>

      <main className="flex-grow container mx-auto px-4 py-8">
      <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">Lacak Status Pengajuan</h3>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          
        <form onSubmit={handleSearch} className="flex gap-4 mt-6">
            <input
              type="text"
              placeholder="Masukkan NIK atau No Tracking"
              className="flex-grow p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Mencari...' : 'Lacak'}
            </button>
          </form>
        </div>
        
        {/* Search Results */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          {isLoading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-500"></div>
              <p className="mt-2">Memuat data...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        No Tracking
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        NIK
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nama
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Jenis Surat
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tanggal Pengajuan
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {searchResults.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.no_pengajuan}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.no_nik}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.nama_lengkap}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.jenis_surat}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(item.tanggal_pengajuan)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getStatusBadge(item.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1 || isLoading}
                  className="px-4 py-2 border rounded-md disabled:opacity-50 text-gray-800"
                >
                  Sebelumnya
                </button>
                <span className="text-gray-800">
                  Halaman {currentPage} dari {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  disabled={currentPage >= totalPages || isLoading}
                  className="px-4 py-2 border rounded-md disabled:opacity-50 text-gray-800"
                >
                  Berikutnya
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-8 text-gray-500">
              {searchQuery 
                ? "Tidak ditemukan pengajuan dengan NIK atau nomor pengajuan tersebut"
                : "Belum ada data pengajuan"}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}