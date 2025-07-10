"use client";
import React, { useState, useCallback, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Tipe data untuk dokumen
type DocType = "KTP" | "KK" | "Surat Pengantar RT/RW" | "Surat Permohonan Bermaterai" | "Izin Usaha" | "Pas Foto 3X4 (latar Merah)" | "Surat Pernyataan tidak mampu dari RT/RW" | "Rekening listrik/air 3 bulan terakhir";

// Interface untuk data form
interface FormData {
  no_kk: string;
  no_nik: string;
  namaLengkap: string;
  alamat: string;
  keterangan: string;
}

// Interface untuk data warga dari API
interface WargaData {
  id: number;
  no_nik: string;
  no_kk: string;
  nama_lengkap: string;
  alamat: string;
}

// Jenis surat yang tersedia
type LetterType = "surat-keterangan-domisili" | "surat-keterangan-usaha" | "surat-keterangan-belum-menikah" | "surat-keterangan-tidak-mampu";

// Definisi persyaratan dokumen
const documentRequirements: Record<LetterType, { label: string; docs: DocType[] }> = {
  "surat-keterangan-domisili": {
    label: "Surat Keterangan Domisili",
    docs: ["KTP", "KK", "Surat Pengantar RT/RW", "Surat Permohonan Bermaterai"],
  },
  "surat-keterangan-usaha": {
    label: "Surat Keterangan Usaha",
    docs: ["KTP", "KK", "Surat Permohonan Bermaterai", "Surat Pengantar RT/RW", "Izin Usaha"],
  },
  "surat-keterangan-belum-menikah": {
    label: "Surat Keterangan Belum Menikah",
    docs: ["KTP", "KK", "Surat Pengantar RT/RW", "Pas Foto 3X4 (latar Merah)"],
  },
  "surat-keterangan-tidak-mampu": {
    label: "Surat Keterangan Tidak Mampu",
    docs: ["KTP", "KK", "Surat Pernyataan tidak mampu dari RT/RW", "Rekening listrik/air 3 bulan terakhir"],
  },
};

// Deskripsi dokumen
const documentDescriptions: Record<DocType, string> = {
  KTP: "Kartu Tanda Penduduk (format JPG/PNG, max 2MB)",
  KK: "Kartu Keluarga (format JPG/PNG, max 2MB)",
  "Surat Pengantar RT/RW": "Surat pengantar dari RT/RW setempat (format PDF/DOC, max 2MB)",
  "Surat Permohonan Bermaterai": "Surat permohonan bermaterai 6000 (format PDF/DOC, max 2MB)",
  "Izin Usaha": "Dokumen izin usaha jika ada (format PDF/JPG, max 2MB)",
  "Pas Foto 3X4 (latar Merah)": "Pas foto terbaru ukuran 3x4 dengan latar belakang merah (format JPG/PNG, max 2MB)",
  "Surat Pernyataan tidak mampu dari RT/RW": "Surat pernyataan tidak mampu dari RT/RW (format PDF/DOC, max 2MB)",
  "Rekening listrik/air 3 bulan terakhir": "Rekening listrik/air 3 bulan terakhir (format PDF/DOC, max 2MB)",
};

// Inisialisasi state untuk file
const initialFileState = Object.keys(documentDescriptions).reduce((acc, doc) => {
  return { ...acc, [doc]: null };
}, {} as Record<DocType, File | null>);

// Inisialisasi state untuk preview
const initialPreviewState = Object.keys(documentDescriptions).reduce((acc, doc) => {
  return { ...acc, [doc]: null };
}, {} as Record<DocType, string | null>);

export default function FormPengajuanSurat() {
  const [selectedLetter, setSelectedLetter] = useState<LetterType | "">("");
  const [formData, setFormData] = useState<FormData>({
    no_kk: "",
    no_nik: "",
    namaLengkap: "",
    alamat: "",
    keterangan: "",
  });

  const [selectedFiles, setSelectedFiles] = useState<Record<DocType, File | null>>(initialFileState);
  const [previews, setPreviews] = useState<Record<DocType, string | null>>(initialPreviewState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    isSuccess: false,
  });

  const [wargaData, setWargaData] = useState<WargaData | null>(null);
  const [nikValid, setNikValid] = useState<boolean | null>(null);
  const [kkValid, setKkValid] = useState<boolean | null>(null);

  // Check NIK in database
// Untuk NIK
useEffect(() => {
  const checkNik = async () => {
    if (formData.no_nik.length === 16) {
      try {
        const response = await fetch(`/api/check?no_nik=${formData.no_nik}`);
        const data = await response.json();
        
        if (!response.ok || !data.success) {
          throw new Error(data.message || 'Gagal memeriksa NIK');
        }

        setNikValid(data.exists);
        
        if (data.exists && data.data) {
          setWargaData(data.data);
          setFormData(prev => ({
            ...prev,
            namaLengkap: data.data.nama_lengkap || prev.namaLengkap,
            no_kk: data.data.no_kk || prev.no_kk,
            alamat: data.data.alamat || prev.alamat,
          }));
        }
      } catch (error) {
        console.error('Error checking NIK:', error);
        setNikValid(false);
        toast.error(error instanceof Error ? error.message : 'Error checking NIK');
      }
    } else {
      setNikValid(null);
    }
  };

  const timer = setTimeout(checkNik, 800); // Tambah debounce time
  return () => clearTimeout(timer);
}, [formData.no_nik]);


// Check KK in database
// Untuk Kk
useEffect(() => {
  const checkKk = async () => {
    if (formData.no_kk.length === 16) {
      try {
        const response = await fetch(`/api/check?no_kk=${formData.no_kk}`);
        const data = await response.json();
        
        if (!response.ok || !data.success) {
          throw new Error(data.message || 'Gagal memeriksa KK');
        }

        setKkValid(data.exists);
        
        if (data.exists && data.data) {
          setWargaData(data.data);
          setFormData(prev => ({
            ...prev,
            namaLengkap: data.data.nama_lengkap || prev.namaLengkap,
            no_kk: data.data.no_kk || prev.no_kk,
            alamat: data.data.alamat || prev.alamat,
          }));
        }
      } catch (error) {
        console.error('Error checking KK:', error);
        setKkValid(false);
        toast.error(error instanceof Error ? error.message : 'Error checking NIK');
      }
    } else {
      setKkValid(null);
    }
  };

  const timer = setTimeout(checkKk, 800); // Tambah debounce time
  return () => clearTimeout(timer);
}, [formData.no_kk]);

// Untuk KK (implementasi serupa)


  // Fungsi untuk menampilkan modal
  const showModal = (title: string, message: string, isSuccess: boolean) => {
    setModalContent({
      title,
      message,
      isSuccess,
    });
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Check if warga exists in database
  // Perbaikan fungsi checkWargaExists di page.tsx
 // Improved checkWargaExists function
 const checkWargaExists = async (no_kk: string, no_nik: string): Promise<boolean> => {
  try {
    console.log('Checking if warga exists:', { no_kk, no_nik });
    
    const response = await fetch(`/api/check?no_kk=${no_kk}&no_nik=${no_nik}`);
    
    console.log('checkWargaExists response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('checkWargaExists response data:', data);
    
    // Pastikan Anda memeriksa properti yang benar
    return data.success && data.exists && data.is_match;
  } catch (error) {
    console.error('Error in checkWargaExists:', error);
    toast.error('Gagal memverifikasi data warga');
    return false;
  }
};

  // Modifikasi handleSubmit untuk menggunakan modal
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      if (!selectedLetter) {
        throw new Error("Jenis surat belum dipilih");
      }

      // Check if NIK and KK are valid length
      if (formData.no_nik.length !== 16 || formData.no_kk.length !== 16) {
        throw new Error("NIK dan Nomor KK harus 16 digit");
      }

      // Check if all required documents are uploaded
      const missingDocs = requiredDocuments.filter((doc) => !selectedFiles[doc]);
      if (missingDocs.length > 0) {
        throw new Error(`Dokumen berikut masih diperlukan: ${missingDocs.join(", ")}`);
      }

      // Check if warga exists and NIK/KK match
      // Check if warga exists and NIK/KK match
      const wargaExists = await checkWargaExists(formData.no_kk, formData.no_nik);
      if (!wargaExists) {
        throw new Error("NIK dan Nomor KK tidak cocok dengan data warga");
      }

      const formPayload = new FormData();

      // Tambahkan data form
      formPayload.append("jenis_surat", documentRequirements[selectedLetter].label);
      formPayload.append("no_kk", formData.no_kk);
      formPayload.append("no_nik", formData.no_nik);
      formPayload.append("nama_lengkap", formData.namaLengkap);
      formPayload.append("alamat", formData.alamat);
      formPayload.append("keterangan", formData.keterangan);

      // Tambahkan file
      documentRequirements[selectedLetter].docs.forEach((doc) => {
        const file = selectedFiles[doc];
        if (file) {
          formPayload.append(doc, file);
        }
      });

      const response = await fetch("/api/pengajuan", {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Gagal mengajukan surat");
      }

      const result = await response.json();

      // Tampilkan modal sukses dengan nomor pengajuan
      showModal("Pengajuan Berhasil!", `Data pengajuan surat Anda telah berhasil dikirim dengan nomor pengajuan: ${result.data.no_pengajuan}. Silakan catat nomor ini untuk keperluan tracking.`, true);

      // Reset form setelah berhasil
      resetForm();
    } catch (error) {
      showModal("Pengajuan Gagal", error instanceof Error ? error.message : "Terjadi kesalahan saat mengajukan surat", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle perubahan input form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle perubahan jenis surat
  const handleLetterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLetter(e.target.value as LetterType);
  };

  // Validasi file
  const validateFile = (file: File, docType: DocType): boolean => {
    const isImage = file.type.startsWith("image/");
    const isPDF = file.type === "application/pdf";
    const isDoc = file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

    // Validasi tipe file
    if ((docType === "KTP" || docType === "KK" || docType === "Pas Foto 3X4 (latar Merah)") && !isImage) {
      toast.error("Hanya file gambar yang diperbolehkan untuk KTP/KK!");
      return false;
    }

    if ((docType.includes("Surat") || docType === "Izin Usaha") && !(isPDF || isDoc || isImage)) {
      toast.error("Hanya file PDF, DOC, atau gambar yang diperbolehkan!");
      return false;
    }

    // Validasi ukuran file
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Ukuran file maksimal 2MB!");
      return false;
    }

    return true;
  };

  // Handle upload file
  const handleFileChange = useCallback(
    (docType: DocType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (!validateFile(file, docType)) return;

      // Update state
      setSelectedFiles((prev) => ({ ...prev, [docType]: file }));

      // Preview untuk gambar
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          setPreviews((prev) => ({
            ...prev,
            [docType]: reader.result as string,
          }));
        };
        reader.readAsDataURL(file);
      } else {
        setPreviews((prev) => ({ ...prev, [docType]: null }));
      }
    },
    []
  );

  // Hapus file
  const removeFile = (docType: DocType) => {
    setSelectedFiles((prev) => ({ ...prev, [docType]: null }));
    setPreviews((prev) => ({ ...prev, [docType]: null }));
  };

  // Reset form
  const resetForm = () => {
    setSelectedLetter("");
    setFormData({
      no_kk: "",
      no_nik: "",
      namaLengkap: "",
      alamat: "",
      keterangan: "",
    });
    setSelectedFiles(initialFileState);
    setPreviews(initialPreviewState);
  };

  // Buat FormData untuk dikirim ke API
  const createFormDataPayload = () => {
    const formDataToSend = new FormData();

    if (!selectedLetter) throw new Error("Jenis surat belum dipilih");

    // Data pribadi
    formDataToSend.append("jenis_surat", documentRequirements[selectedLetter].label);
    formDataToSend.append("no_kk", formData.no_kk);
    formDataToSend.append("no_nik", formData.no_nik);
    formDataToSend.append("nama_lengkap", formData.namaLengkap);
    formDataToSend.append("alamat", formData.alamat);
    formDataToSend.append("keterangan", formData.keterangan);

    // File
    documentRequirements[selectedLetter].docs.forEach((doc) => {
      const file = selectedFiles[doc];
      if (file) {
        formDataToSend.append(doc, file);
      }
    });

    return formDataToSend;
  };

  // Handle submit form

  // Dokumen yang diperlukan berdasarkan jenis surat
  const requiredDocuments = selectedLetter ? documentRequirements[selectedLetter].docs : [];

  return (
    <div style={{ fontFamily: "var(--font-poppins)" }} className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-50 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="px-6 mt-10 flex flex-col md:flex-row justify-between items-center ml-10 mr-10">
        <div className="ml-10 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">SISTEM INFORMASI</h1>
          <h1 className="text-4xl font-bold mb-4 text-orange-500">MANAJEMEN ADMINISTRASI</h1>
          <p className="text-gray-600 text-xl">Layanan Pengurusan Surat Desa di Kantor Keuchik</p>
        </div>
        <img src="/surat.png" alt="Surat" className="w-150 h-100 mr-2" />
      </div>

      <div className="container mx-auto px-4 py-8 mt-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-orange-500 p-6 text-white">
            <h1 className="text-2xl font-bold">Formulir Pengajuan Surat</h1>
            <p className="mt-2">Silakan lengkapi form berikut untuk mengajukan surat</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Informasi Pribadi */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Data Pribadi</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nomor KK</label>
                  <input
                    type="text"
                    name="no_kk"
                    placeholder="Masukkan Nomor KK"
                    className={`w-full p-3 text-gray-700 border ${
                      kkValid === null ? "border-gray-300" : kkValid ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
                    } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition`}
                    required
                    value={formData.no_kk}
                    onChange={handleInputChange}
                    maxLength={16}
                    pattern="\d{16}"
                    title="Harus 16 digit angka"
                  />
                  {formData.no_kk.length !== 16 && formData.no_kk.length > 0 && <p className="text-red-500 text-xs mt-1">Nomor KK harus 16 digit angka</p>}
                  {kkValid === false && formData.no_kk.length === 16 && <p className="text-red-500 text-xs mt-1">Nomor KK tidak terdaftar di database warga</p>}
                  {kkValid && wargaData && <p className="text-green-500 text-xs mt-1">Nomor KK valid</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nomor NIK</label>
                  <input
                    type="text"
                    name="no_nik"
                    placeholder="Masukkan Nomor NIK (16 digit)"
                    className={`w-full p-3 border text-gray-700 ${
                      nikValid === null ? "border-gray-300" : nikValid ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
                    } rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition`}
                    required
                    value={formData.no_nik}
                    onChange={handleInputChange}
                    maxLength={16}
                    pattern="\d{16}"
                    title="Harus 16 digit angka"
                  />
                  {formData.no_nik.length !== 16 && formData.no_nik.length > 0 && <p className="text-red-500 text-xs mt-1">NIK harus 16 digit angka</p>}
                  {nikValid === false && formData.no_nik.length === 16 && <p className="text-red-500 text-xs mt-1">NIK tidak terdaftar di database warga</p>}
                  {nikValid && wargaData && (
                    <div className="text-green-500 text-xs mt-1">
                      <p>NIK terdaftar atas nama: {wargaData.nama_lengkap}</p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  name="namaLengkap"
                  placeholder="Masukkan Nama Lengkap"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-700"
                  required
                  value={formData.namaLengkap}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Lengkap</label>
                <input
                  type="text"
                  name="alamat"
                  placeholder="Masukkan Alamat Lengkap"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-700"
                  required
                  value={formData.alamat}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Keterangan Tambahan</label>
                <textarea
                  name="keterangan"
                  placeholder="Masukkan keterangan tambahan jika diperlukan"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition min-h-[100px] text-gray-700"
                  value={formData.keterangan}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Pilihan Jenis Surat */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Jenis Surat</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pilih Jenis Surat</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" required value={selectedLetter} onChange={handleLetterChange}>
                  <option value="">-- Pilih Jenis Surat --</option>
                  {Object.entries(documentRequirements).map(([value, { label }]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {selectedLetter && (
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h3 className="font-medium text-yellow-800">Persyaratan untuk {documentRequirements[selectedLetter].label}:</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-yellow-700">
                    {documentRequirements[selectedLetter].docs.map((doc) => (
                      <li key={doc}>
                        {doc} - {documentDescriptions[doc]}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Upload Dokumen */}
            {selectedLetter && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Upload Dokumen</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {requiredDocuments.map((docType) => (
                    <div key={docType} className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        {docType} <span className="text-red-500">*</span>
                        <span className="block text-xs text-gray-500 mt-1">{documentDescriptions[docType]}</span>
                      </label>

                      <div className="relative">
                        <input
                          type="file"
                          id={`upload-${docType}`}
                          onChange={handleFileChange(docType)}
                          accept={docType === "KTP" || docType === "KK" || docType === "Pas Foto 3X4 (latar Merah)" ? "image/*" : ".pdf,.doc,.docx,image/*"}
                          className="hidden"
                          required
                        />
                        <label
                          htmlFor={`upload-${docType}`}
                          className={`block border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors ${selectedFiles[docType] ? "border-green-500 bg-green-50" : "border-gray-300"}`}
                        >
                          {selectedFiles[docType] ? (
                            <div className="flex flex-col items-center space-y-2">
                              <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-green-600 font-medium">File {docType} terpilih</span>
                              <span className="text-sm text-gray-500 truncate max-w-full">{selectedFiles[docType]?.name}</span>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <svg className="mx-auto h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                              <p className="text-sm text-gray-600">Klik untuk upload</p>
                              <p className="text-xs text-gray-500">{documentDescriptions[docType]}</p>
                            </div>
                          )}
                        </label>

                        {selectedFiles[docType] && (
                          <button type="button" onClick={() => removeFile(docType)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors shadow-md" title="Hapus file">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        )}
                      </div>

                      {/* Preview untuk gambar */}
                      {previews[docType] && (
                        <div className="mt-2">
                          <p className="text-sm font-medium mb-1">Preview:</p>
                          <img src={previews[docType]!} alt={`Preview ${docType}`} className="max-h-40 rounded border" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors font-medium shadow-md hover:shadow-lg flex items-center justify-center ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Memproses...
                  </>
                ) : (
                  "Ajukan Sekarang"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal Notification */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
            <div className="flex flex-col items-center">
              {/* Icon */}
              {modalContent.isSuccess ? (
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : (
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              )}

              {/* Title */}
              <h3 className={`text-xl font-bold mb-2 ${modalContent.isSuccess ? "text-green-600" : "text-red-600"}`}>{modalContent.title}</h3>

              {/* Message */}
              <p className="text-gray-600 text-center mb-6">{modalContent.message}</p>

              {/* Button */}
              <button onClick={closeModal} className={`px-6 py-2 rounded-md font-medium ${modalContent.isSuccess ? "bg-green-500 text-white hover:bg-green-600" : "bg-red-500 text-white hover:bg-red-600"} transition-colors`}>
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
      <Footer />
    </div>
  );
}
