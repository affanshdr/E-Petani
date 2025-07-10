"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const steps = [
  {
    number: 1,
    title: "Isi Form Online",
    description: [
      "Akses website → Menu 'Dashboard'",
      "Isi Form + upload syarat",
      "Klik 'Ajukan Sekarang'",
    ],
    icon: "📝",
  },
  {
    number: 2,
    title: "Melihat Pengajuan",
    description: [
      "Klik menu 'Lacak Pengajuan'",
      "Lacak pengajuan dengan NIK/No. Tracking",
    ],
    icon: "⏳",
  },
  {
    number: 3,
    title: "Cek Status",
    description: [
      "Ikuti Langkah 2",
      "Cek Status secara berkala (1-3 Hari Kerja)",
    ],
    icon: "🔍",
  },
  {
    number: 4,
    title: "Ambil Surat",
    description: "Pergi ke Kantor saat status 'Selesai'",
    icon: "✅",
  },
];

const letterTypes = [
  {
    name: "Surat Keterangan Domisili",
    requirements: [
      "KTP asli dan fotokopi",
      "KK asli dan fotokopi",
      "Surat pengantar dari RT/RW",
      "Surat permohonan bermaterai",
    ],
    notes: [
      "Pastikan alamat sesuai dengan dokumen",
      "Surat pengantar harus ditandatangani RT/RW",
      "Materai 10.000 diperlukan untuk surat permohonan",
    ],
  },
  {
    name: "Surat Keterangan Usaha",
    requirements: [
      "KTP asli dan fotokopi",
      "KK asli dan fotokopi",
      "Izin usaha (jika ada)",
      "Foto lokasi usaha",
    ],
    notes: [
      "Foto usaha harus jelas menunjukkan kegiatan usaha",
      "Jika tidak memiliki izin usaha, bisa menggunakan surat pernyataan",
      "Lokasi usaha harus dalam wilayah desa",
    ],
  },
  {
    name: "Surat Keterangan Belum Menikah",
    requirements: [
      "KTP asli dan fotokopi",
      "KK asli dan fotokopi",
      "Surat pengantar dari RT/RW",
      "Pas foto 3x4 (latar merah)",
    ],
    notes: [
      "Pas foto harus terbaru (max 3 bulan)",
      "Surat pengantar harus mencantumkan status perkawinan",
      "Untuk PNS/TNI/POLRI memerlukan tambahan dokumen",
    ],
  },
  {
    name: "Surat Keterangan Tidak Mampu",
    requirements: [
      "KTP asli dan fotokopi",
      "KK asli dan fotokopi",
      "Surat pernyataan tidak mampu dari RT/RW",
      "Rekening listrik/air 3 bulan terakhir",
    ],
    notes: [
      "Pernyataan RT/RW harus bermaterai",
      "Rekening menunjukkan pemakaian minimal",
      "Untuk pelajar perlu melampirkan surat dari sekolah",
    ],
  },
];

export default function Panduan() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string>("");

  const handleLetterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLetter(e.target.value);
  };

  const currentLetter = letterTypes.find(
    (letter) => letter.name === selectedLetter
  );

  return (
    <div
      style={{ fontFamily: "var(--font-poppins)" }}
      className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-50 font-poppins"
    >
      <Navbar />

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            PANDUAN PENGAJUAN SURAT
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Layanan pengurusan surat desa Kopelma Darussalam dengan proses mudah
            dan transparan
          </p>
        </motion.div>

        {/* Pilih Jenis Surat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <span className="bg-yellow-100 text-gray-600 p-2 rounded-lg mr-3 ">
              📄
            </span>
            Pilih Jenis Surat
          </h3>

          <div className="relative group">
            <select
              value={selectedLetter}
              onChange={handleLetterChange}
              className="w-full p-4 pr-10 text-lg border border-gray-300 rounded-xl appearance-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white cursor-pointer transition-all hover:shadow-md text-gray-600"
            >
              <option value="" disabled className="text-gray-600">
                Pilih jenis surat...
              </option>
              {letterTypes
                .filter((letter) =>
                  letter.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((letter, index) => (
                  <option
                    key={index}
                    value={letter.name}
                    className="py-2 text-gray-700 hover:bg-yellow-50"
                  >
                    {letter.name}
                  </option>
                ))}
            </select>

            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 group-hover:text-yellow-600 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Dynamic Requirements */}
          {currentLetter && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-6 overflow-hidden"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-yellow-500">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <span className="bg-yellow-100 text-yellow-600 p-2 rounded-lg mr-3">
                    📋
                  </span>
                  {currentLetter.name}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                      Persyaratan Umum
                    </h3>
                    <ul className="space-y-3">
                      {currentLetter.requirements.map((req, i) => (
                        <motion.li
                          key={i}
                          initial={{ x: -20 }}
                          whileInView={{ x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start"
                        >
                          <span className="text-yellow-500 mr-2">•</span>
                          <span className="text-gray-600">{req}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                      Catatan Penting
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      {currentLetter.notes.map((note, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-yellow-500 mr-2">⚠️</span>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Langkah-langkah Pengajuan */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Langkah-langkah Pengajuan
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {step.title}
                    </h3>
                  </div>

                  <div className="text-gray-600 pl-14">
                    {Array.isArray(step.description) ? (
                      <ul className="space-y-2">
                        {step.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-yellow-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{step.description}</p>
                    )}
                  </div>
                </div>

                <div className="bg-yellow-50 px-6 py-3 text-center text-yellow-600 font-medium">
                  {step.icon} Langkah {step.number}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}