"use client";

import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/NavbarAdmin";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const TemplateSurat = () => {
  const [templates, setTemplates] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [templateToDelete, setTemplateToDelete] = useState<string | null>(null);
  const [newTemplate, setNewTemplate] = useState({
    judul: "",
    terakhirDiubah: new Date().toISOString().split('T')[0]
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Warna yang digunakan di seluruh komponen
  const orangeColor = '#F97316'; // Warna tombol simpan/orange-500
  const orangeLightColor = '#FDBA74'; // Warna lebih terang (orange-300)
  const warna = '#8B8B8B'; // Warna teks

  // Variasi warna untuk template cards
  const templateColors = [
    { bg: '#F97316', btn: '#FED7AA' }, // Orange-500, Orange-200
    { bg: '#EA580C', btn: '#FDBA74' }, // Orange-600, Orange-300
    { bg: '#C2410C', btn: '#FB923C' }, // Orange-700, Orange-400
    { bg: '#9A3412', btn: '#F97316' }  // Orange-800, Orange-500
  ];

  // Fetch templates on component mount
  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/template-surat");
        if (!res.ok) {
          throw new Error("Gagal mengambil data template");
        }
        const data = await res.json();
        
        // Format tanggal untuk tampilan dan tambahkan warna
        const formattedData = data.map((item: any, index: number) => {
          const colorIndex = index % templateColors.length;
          return {
            ...item,
            terakhirDiubah: new Date(item.terakhirDiubah).toISOString().split('T')[0],
            // Tambahkan warna sesuai dengan urutan template
            warna: templateColors[colorIndex].bg,
            warnaBtn: templateColors[colorIndex].btn
          };
        });
        
        setTemplates(formattedData);
        setError(null);
      } catch (err) {
        setError("Terjadi kesalahan saat mengambil data");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTemplates();
  }, []);

  const handleEditClick = (item: any) => {
    setSelectedTemplate({
      ...item,
      terakhirDiubah: new Date(item.terakhirDiubah).toISOString().split('T')[0]
    });
    setShowModal(true);
  };

  const handleDeleteClick = (id: string) => {
    setTemplateToDelete(id);
    setShowDeleteModal(true);
  };

  const handleAddClick = () => {
    setNewTemplate({
      judul: "",
      terakhirDiubah: new Date().toISOString().split('T')[0]
    });
    setShowAddModal(true);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/template-surat", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedTemplate.id,
          judul: selectedTemplate.judul
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal menyimpan perubahan");
      }

      const updatedTemplate = await response.json();
      
      // Update local state dengan mempertahankan warna yang sudah ada
      setTemplates(templates.map(template => 
        template.id === updatedTemplate.id ? {
          ...updatedTemplate,
          terakhirDiubah: new Date(updatedTemplate.terakhirDiubah).toISOString().split('T')[0],
          warna: template.warna,
          warnaBtn: template.warnaBtn
        } : template
      ));
      
      setError(null);
      setShowModal(false);
    } catch (err) {
      setError("Terjadi kesalahan saat menyimpan");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTemplate = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/template-surat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          judul: newTemplate.judul
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal menambahkan template");
      }

      const createdTemplate = await response.json();
      
      // Tambahkan warna baru secara acak
      const colorIndex = templates.length % templateColors.length;
      
      // Add to local state with color
      setTemplates([...templates, {
        ...createdTemplate,
        terakhirDiubah: new Date(createdTemplate.terakhirDiubah).toISOString().split('T')[0],
        warna: templateColors[colorIndex].bg,
        warnaBtn: templateColors[colorIndex].btn
      }]);
      
      setError(null);
      setShowAddModal(false);
    } catch (err) {
      setError("Terjadi kesalahan saat menambahkan template");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTemplate = async () => {
    if (!templateToDelete) return;

    try {
      setIsLoading(true);
      const response = await fetch("/api/template-surat", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: templateToDelete }),
      });

      if (!response.ok) {
        throw new Error("Gagal menghapus template");
      }

      const remainingTemplates = await response.json();
      
      // Update local state with formatted dates and reapply colors
      const updatedTemplates = remainingTemplates.map((template: any, index: number) => {
        const colorIndex = index % templateColors.length;
        return {
          ...template,
          terakhirDiubah: new Date(template.terakhirDiubah).toISOString().split('T')[0],
          warna: templateColors[colorIndex].bg,
          warnaBtn: templateColors[colorIndex].btn
        };
      });
      
      setTemplates(updatedTemplates);
      setError(null);
    } catch (err) {
      setError("Terjadi kesalahan saat menghapus template");
      console.error(err);
    } finally {
      setIsLoading(false);
      setShowDeleteModal(false);
      setTemplateToDelete(null);
    }
  };

  return (
    <div className="ml-64 min-h-screen bg-gradient-to-br from-yellow-50 to-white p-8">
      {/* Navbar */}
      <NavbarAdmin currentPath="/admin/template-surat" />

      {/* Error message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}

      {/* Search Bar */}
      <div className="flex justify-end mb-6 w-full ">
        {/* <input
          type="text"
          placeholder="Cari Nama / Nomor Surat . . ."
          className="w-full max-w-xl px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
          style={{ color: warna }}
        /> */}

        <div className="ml-4 flex items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden" />
          <p className="ml-2 font-semibold text-gray-700">Indra</p>
        </div>
      </div>

      {/* Nama Keuchik */}
      <div className="flex items-center mb-8">
        <label className="mr-4 font-semibold" style={{ color: warna }}>Nama Keuchik</label>
        <input
          type="text"
          defaultValue="Yushadi, S.Ag,"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          style={{ color: warna }}
        />
        <button className="ml-4 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg transition">
          Simpan
        </button>
      </div>

      {/* Add Template Button
      <div className="mb-6">
        <button
          onClick={handleAddClick}
          className="flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition"
          disabled={isLoading}
        >
          <FaPlus className="mr-2" /> Tambah Template
        </button>
      </div>

      {/* Loading indicator 
      {isLoading && (
        <div className="flex justify-center my-8">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-orange-500"></div>
        </div>
      )} */}

      {/* Template Cards */}
      {!isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((item) => (
            <div
              key={item.id}
              className="text-white p-6 rounded-xl shadow-md relative"
              style={{ backgroundColor: item.warna }}
            >
              <h2 className="text-lg font-semibold">{item.judul}</h2>
              <p className="text-sm mt-1">Terakhir diubah: {item.terakhirDiubah}</p>
              <div className="mt-4 flex gap-2">
                <button
                  className="text-black px-4 py-2 rounded-full font-semibold hover:brightness-110 flex items-center"
                  style={{ backgroundColor: item.warnaBtn }}
                  onClick={() => handleEditClick(item)}
                >
                  <FaEdit className="inline mr-2" /> Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:brightness-110 flex items-center"
                  onClick={() => handleDeleteClick(item.id)}
                >
                  <FaTrash className="inline mr-2" /> Hapus
                </button>
              </div>
            </div>
          ))}

          {templates.length === 0 && !isLoading && (
            <div className="col-span-2 text-center py-8 text-gray-500">
              Belum ada template surat. Klik "Tambah Template" untuk membuat template baru.
            </div>
          )}
        </div>
      )}

      {/* Modal Edit */}
      {showModal && selectedTemplate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-4" style={{ color: warna }}>Edit Template</h2>
            <label className="block mb-2" style={{ color: warna }}>Judul Surat</label>
            <input
              type="text"
              value={selectedTemplate.judul}
              onChange={(e) =>
                setSelectedTemplate({
                  ...selectedTemplate,
                  judul: e.target.value,
                })
              }
              className="w-full p-2 border rounded mb-4"
              style={{ color: warna }}
            />
            <label className="block mb-2" style={{ color: warna }}>Terakhir Diubah</label>
            <input
              type="date"
              value={selectedTemplate.terakhirDiubah}
              className="w-full p-2 border rounded mb-4"
              style={{ color: warna }}
              disabled
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
                disabled={isLoading}
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                disabled={isLoading}
              >
                {isLoading ? 'Menyimpan...' : 'Simpan'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Tambah Template */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-4" style={{ color: warna }}>Tambah Template Baru</h2>
            <label className="block mb-2" style={{ color: warna }}>Judul Surat</label>
            <input
              type="text"
              value={newTemplate.judul}
              onChange={(e) =>
                setNewTemplate({
                  ...newTemplate,
                  judul: e.target.value,
                })
              }
              className="w-full p-2 border rounded mb-4"
              style={{ color: warna }}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
                disabled={isLoading}
              >
                Batal
              </button>
              <button
                onClick={handleAddTemplate}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                disabled={isLoading || !newTemplate.judul}
              >
                {isLoading ? 'Menambahkan...' : 'Tambah'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Hapus Template */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Konfirmasi Hapus</h2>
            <p className="mb-6">Apakah Anda yakin ingin menghapus template ini? Tindakan ini tidak dapat dibatalkan.</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
                disabled={isLoading}
              >
                Batal
              </button>
              <button
                onClick={handleDeleteTemplate}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                disabled={isLoading}
              >
                {isLoading ? 'Menghapus...' : 'Hapus'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateSurat;