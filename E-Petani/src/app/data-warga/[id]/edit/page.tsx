'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import NavbarAdmin from '../../../../components/NavbarAdmin';

export default function EditDataWarga() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [formData, setFormData] = useState({
    nama_lengkap: '',
    no_nik: '',
    no_kk: '',
    alamat: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      fetch(`/api/data-warga/${id}`)
        .then(res => res.json())
        .then(data => {
          setFormData({
            nama_lengkap: data.nama || '',
            no_nik: data.no_nik || '',
            no_kk: data.no_kk || '',
            alamat: data.alamat || ''
          });
        })
        .catch(() => {
          setError('Gagal mengambil data warga');
        });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (!formData.nama_lengkap || !formData.no_nik || !formData.no_kk || !formData.alamat) {
        throw new Error('Semua field harus diisi');
      }

      if (!/^\d{16}$/.test(formData.no_nik)) {
        throw new Error('NIK harus 16 digit angka');
      }

      if (!/^\d{16}$/.test(formData.no_kk)) {
        throw new Error('No KK harus 16 digit angka');
      }

      const response = await fetch(`/api/data-warga/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Gagal memperbarui data');
      }

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
      <NavbarAdmin currentPath={''} />
      <div className="flex-1 ml-64 p-8 overflow-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Data Warga</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              <InputField label="Nama Lengkap" name="nama_lengkap" value={formData.nama_lengkap} onChange={handleChange} />
              <InputField label="NIK" name="no_nik" value={formData.no_nik} onChange={handleChange} maxLength={16} pattern="\d{16}" title="NIK harus 16 digit angka" />
              <InputField label="No. KK" name="no_kk" value={formData.no_kk} onChange={handleChange} maxLength={16} pattern="\d{16}" title="No KK harus 16 digit angka" />
              <InputField label="Alamat" name="alamat" value={formData.alamat} onChange={handleChange} />
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
                {isLoading ? 'Menyimpan...' : 'Simpan Perubahan'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  maxLength,
  pattern,
  title
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  pattern?: string;
  title?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        name={name}
        placeholder={`Masukkan ${label.toLowerCase()} ...`}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD233] focus:border-[#FFD233] outline-none transition text-gray-600"
        value={value}
        onChange={onChange}
        required
        maxLength={maxLength}
        pattern={pattern}
        title={title}
      />
    </div>
  );
}
