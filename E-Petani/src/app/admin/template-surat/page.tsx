"use client";

import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../../components/NavbarAdmin";
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
    terakhirDiubah: new Date().toISOString().split('T')[0],
    warna: "",
    warnaBtn: ""
  });

  // Fetch templates on component mount
  useEffect(() => {
    const fetchTemplates = async () => {
      const res = await fetch("/api/template-surat");
      const data = await res.json();
      setTemplates(data);
    };
    fetchTemplates();
  }, []);

  const handleEditClick = (item: any) => {
    setSelectedTemplate(item);
    setShowModal(true);
  };

  const handleDeleteClick = (id: string) => {
    setTemplateToDelete(id);
    setShowDeleteModal(true);
  };

  const handleAddClick = () => {
    setNewTemplate({
      judul: "",
      terakhirDiubah: new Date().toISOString().split('T')[0],
      warna: "",
      warnaBtn: ""
    });
    setShowAddModal(true);
  };

  const handleSave = async () => {
    const response = await fetch("/api/template-surat", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedTemplate),
    });

    if (response.ok) {
      const updatedTemplates = await response.json();
      setTemplates(updatedTemplates);
    }
    setShowModal(false);
  };

  const handleAddTemplate = async () => {
    const response = await fetch("/api/template-surat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTemplate),
    });

    if (response.ok) {
      const updatedTemplates = await response.json();
      setTemplates(updatedTemplates);
      setShowAddModal(false);
    }
  };

  const handleDeleteTemplate = async () => {
    if (!templateToDelete) return;

    const response = await fetch("/api/template-surat", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: templateToDelete }),
    });

    if (response.ok) {
      const updatedTemplates = await response.json();
      setTemplates(updatedTemplates);
    }
    setShowDeleteModal(false);
    setTemplateToDelete(null);
  };

  const warna = '#8B8B8B';

  return (
    <div className="ml-64 min-h-screen bg-gradient-to-br from-yellow-50 to-white p-8">
      {/* Navbar */}
      <NavbarAdmin currentPath="/admin/template-surat" />

      {/* Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Cari Nama / Nomor Surat . . ."
          className="w-full max-w-xl px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
          style={{ color: warna }}
        />
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

      {/* Add Template Button */}
      <div className="mb-6">
        <button
          onClick={handleAddClick}
          className="flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition"
        >
          <FaPlus className="mr-2" /> Tambah Template
        </button>
      </div>

      {/* Template Cards */}
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
                className="bg-[#EBDDC6] text-black px-4 py-2 rounded-full font-semibold hover:brightness-110 flex items-center"
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
      </div>

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
              onChange={(e) =>
                setSelectedTemplate({
                  ...selectedTemplate,
                  terakhirDiubah: e.target.value,
                })
              }
              className="w-full p-2 border rounded mb-4"
              style={{ color: warna }}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                Simpan
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
            <label className="block mb-2" style={{ color: warna }}>Warna Latar (opsional)</label>
            <input
              type="color"
              value={newTemplate.warna}
              onChange={(e) =>
                setNewTemplate({
                  ...newTemplate,
                  warna: e.target.value,
                })
              }
              className="w-full p-2 border rounded mb-4"
              style={{ color: warna }}
            />
            <label className="block mb-2" style={{ color: warna }}>Warna Tombol (opsional)</label>
            <input
              type="color"
              value={newTemplate.warnaBtn}
              onChange={(e) =>
                setNewTemplate({
                  ...newTemplate,
                  warnaBtn: e.target.value,
                })
              }
              className="w-full p-2 border rounded mb-4"
              style={{ color: warna }}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Batal
              </button>
              <button
                onClick={handleAddTemplate}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                Tambah
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
              >
                Batal
              </button>
              <button
                onClick={handleDeleteTemplate}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateSurat;