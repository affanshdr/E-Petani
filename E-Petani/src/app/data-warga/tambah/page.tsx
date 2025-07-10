'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavbarAdmin from "../../../components/NavbarAdmin";

interface WargaData {
  id: number;
  nama_lengkap: string;
  no_nik: string;
  no_kk: string;
  alamat: string;
}

export default function TambahDataWarga() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nama_lengkap: '',
    no_nik: '',
    no_kk: '',
    alamat: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Validasi
      if (!formData.nama_lengkap || !formData.no_nik || !formData.no_kk || !formData.alamat) {
        throw new Error('Semua field harus diisi');
      }
      
      if (!/^\d{16}$/.test(formData.no_nik)) {
        throw new Error('NIK harus 16 digit angka');
      }
      
      if (!/^\d{16}$/.test(formData.no_kk)) {
        throw new Error('No KK harus 16 digit angka');
      }

      // Kirim data ke API
      const response = await fetch('/api/data-warga', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Gagal menambahkan data');
      }

      // Redirect setelah berhasil
      router.push('/data-warga');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Terjadi kesalahan');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ fontFamily: 'var(--font-poppins)' }} className="min-h-screen bg-gradient-to-br from-yellow-50 to-white font-sans flex">
      <NavbarAdmin currentPath={''}/>
      
      <div className="flex-1 ml-64 p-8 overflow-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Form Tambah Data Warga</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  name="nama_lengkap"
                  placeholder="Masukkan nama lengkap ..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD233] focus:border-[#FFD233] outline-none transition text-gray-800"
                  value={formData.nama_lengkap}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">NIK</label>
                <input
                  type="text"
                  name="no_nik"
                  placeholder="Masukkan NIK (16 digit) ..."
                  className="w-full p-3 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD233] focus:border-[#FFD233] outline-none transition"
                  value={formData.no_nik}
                  onChange={handleChange}
                  required
                  maxLength={16}
                  pattern="\d{16}"
                  title="NIK harus 16 digit angka"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">No. KK</label>
                <input
                  type="text"
                  name="no_kk"
                  placeholder="Masukkan No. KK (16 digit) ..."
                  className="w-full p-3 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD233] focus:border-[#FFD233] outline-none transition"
                  value={formData.no_kk}
                  onChange={handleChange}
                  required
                  maxLength={16}
                  pattern="\d{16}"
                  title="No KK harus 16 digit angka"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-800 font-medium  mb-1">Alamat</label>
                <input
                  type="text"
                  name="alamat"
                  placeholder="Masukkan alamat lengkap ..."
                  className="w-full p-3 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD233] focus:border-[#FFD233] outline-none transition"
                  value={formData.alamat}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => router.push('/data-warga')}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                disabled={isLoading}
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#FFD233] hover:bg-[#E6BD2E] text-gray-800 font-medium rounded-lg transition-colors disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? 'Menyimpan...' : 'Simpan'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}