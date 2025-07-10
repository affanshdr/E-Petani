"use client";

import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import NavbarAdmin from "../../../components/NavbarAdmin";

type StatusPengajuan = "diajukan" | "diproses" | "ditolak" | "selesai";

type Pengajuan = {
  id: number;
  noPengajuan: string;
  noKK: string;
  noNIK: string;
  namaLengkap: string;
  jenisSurat: string;
  tanggalPengajuan: string;
  tanggalSelesai?: string;
  keterangan?: string;
  status: StatusPengajuan;
  fileKTP?: string;
  fileKK?: string;
  filePengantarRT?: string;
  filePermohonan?: string;
  fileIzinUsaha?: string;
  filePernyataan?: string;
  fileRekening?: string;
  filePasFoto?: string;
};

export default function PengajuanMasukPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStatus, setActiveStatus] = useState<StatusPengajuan>("diajukan");
  const [allPengajuan, setAllPengajuan] = useState<Pengajuan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPengajuan, setSelectedPengajuan] = useState<Pengajuan | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  // Fetch all data once on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/pengajuan");
        if (!response.ok) {
          throw new Error("Gagal mengambil data pengajuan");
        }

        const result = await response.json();

        if (result.success) {
          const formattedData = result.data.map((item: any) => ({
            id: item.id,
            noPengajuan:
              item.no_pengajuan || `KM-${item.id.toString().padStart(4, "0")}`,
            noKK: item.no_kk,
            noNIK: item.no_nik,
            namaLengkap: item.nama_lengkap,
            jenisSurat: item.jenis_surat,
            tanggalPengajuan: new Date(
              item.tanggal_pengajuan
            ).toLocaleDateString("id-ID"),
            tanggalSelesai: item.tanggal_selesai
              ? new Date(item.tanggal_selesai).toLocaleDateString("id-ID")
              : undefined,
            keterangan: item.keterangan,
            status: item.status.toLowerCase() as StatusPengajuan,
            fileKTP: item.file_ktp,
            fileKK: item.file_kk,
            filePengantarRT: item.file_pengantar_rtrw,
            filePermohonan: item.file_surat_permohonan,
            fileIzinUsaha: item.file_izin_usaha,
            filePernyataan: item.file_pernyataan_tm,
            fileRekening: item.file_rekening_listrik,
            filePasFoto: item.file_pas_foto,
          }));

          setAllPengajuan(formattedData);
        } else {
          throw new Error(result.message || "Gagal memproses data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error instanceof Error ? error.message : "Terjadi kesalahan");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter data based on active status and search query
  const filteredData = allPengajuan.filter(
    (item) =>
      item.status === activeStatus &&
      (item.noPengajuan?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.noNIK.includes(searchQuery) ||
        item.namaLengkap.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const updatePengajuanStatus = async (
    id: number,
    newStatus: StatusPengajuan,
    additionalData?: any
  ) => {
    try {
      const response = await fetch(`/api/pengajuan?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
          ...additionalData,
        }),
      });

      if (!response.ok)
        throw new Error(`Gagal mengubah status ke ${newStatus}`);

      const updatedData = await response.json();

      // Update local state
      setAllPengajuan((prevData) =>
        prevData.map((item) =>
          item.id === id
            ? {
                ...item,
                status: newStatus,
                ...(newStatus === "selesai" && {
                  noPengajuan: additionalData?.no_pengajuan || item.noPengajuan,
                  tanggalSelesai: new Date().toLocaleDateString("id-ID"),
                }),
                ...(additionalData?.keterangan && {
                  keterangan: additionalData.keterangan,
                }),
              }
            : item
        )
      );

      return true;
    } catch (error) {
      console.error("Error updating status:", error);
      setError(
        error instanceof Error
          ? error.message
          : `Gagal mengubah status ke ${newStatus}`
      );
      return false;
    }
  };

  const handleProses = async (id: number) => {
    await updatePengajuanStatus(id, "diproses");
  };

  const handleTolak = async (id: number) => {
    await updatePengajuanStatus(id, "ditolak", {
      keterangan:
        "Pengajuan belum dapat diproses karena berkas yang dilampirkan tidak sesuai/tidak memenuhi persyaratan yang berlaku.",
    });
  };

  const handleSelesai = async (id: number) => {
    // Format nomor surat: SK/[tahun]/[nomor urut]
    const tahun = new Date().getFullYear();
    const nomorUrut = Math.floor(1000 + Math.random() * 9000); // Atau ambil dari database

    const noSurat = `SK/${tahun}/${nomorUrut}`;

    const success = await updatePengajuanStatus(id, "selesai", {
      no_pengajuan: noSurat,
      tanggal_selesai: new Date().toISOString(),
    });

    if (success) {
      // Update local state untuk menampilkan nomor surat baru
      setAllPengajuan((prevData) =>
        prevData.map((item) =>
          item.id === id
            ? {
                ...item,
                status: "selesai",
                noPengajuan: noSurat,
                tanggalSelesai: new Date().toLocaleDateString("id-ID"),
              }
            : item
        )
      );
    }
  };

  const viewDocuments = (pengajuan: Pengajuan) => {
    setSelectedPengajuan(pengajuan);
  };

  const getStatusLabel = (status: StatusPengajuan) => {
    const labels: Record<StatusPengajuan, string> = {
      diajukan: "Diajukan",
      diproses: "Diproses",
      ditolak: "Ditolak",
      selesai: "Selesai",
    };
    return labels[status];
  };

  const getStatusCount = (status: StatusPengajuan) => {
    return allPengajuan.filter((p) => p.status === status).length;
  };

  return (
    <div className="flex min-h-screen bg-yellow-100">
      <NavbarAdmin currentPath="/Admin/Pengajuan-masuk" />

      <main
        className="flex-1 p-8 ml-64"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="relative w-full max-w-md shadow-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari Nama / Nomor Surat / NIK..."
              className="w-full pl-4 pr-10 py-3 border bg-white border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-800"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex items-center space-x-3 ml-4">
          
            <div className="text-right">
              <p className="font-medium text-gray-800 text-4xl">Admin</p>
              <p className=" text-gray-500 text-2xl">Administrator</p>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full mb-6">
          {(
            ["diajukan", "diproses", "selesai", "ditolak"] as StatusPengajuan[]
          ).map((status) => (
            <button
              key={status}
              onClick={() => setActiveStatus(status)}
              className={`
                bg-white border-l-4 p-3 rounded-md shadow
                ${
                  status === "diajukan"
                    ? "border-blue-400"
                    : status === "diproses"
                    ? "border-yellow-400"
                    : status === "selesai"
                    ? "border-green-400"
                    : "border-red-400"
                }
                ${activeStatus === status ? "ring-2 ring-opacity-90" : ""}
                ${
                  status === "diajukan"
                    ? "hover:bg-blue-50"
                    : status === "diproses"
                    ? "hover:bg-yellow-50"
                    : status === "selesai"
                    ? "hover:bg-green-50"
                    : "hover:bg-red-50"
                }
              `}
            >
              <p
                className={`font-medium ${
                  status === "diajukan"
                    ? "text-blue-700"
                    : status === "diproses"
                    ? "text-yellow-700"
                    : status === "selesai"
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {getStatusLabel(status)}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {getStatusCount(status)} pengajuan
              </p>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-xl font-bold mb-4 text-gray-700">
            {getStatusLabel(activeStatus)} ({getStatusCount(activeStatus)})
          </h1>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : filteredData.length === 0 ? (
            <div className="p-8 text-center text-gray-800">
              Tidak ada data pengajuan dengan status{" "}
              {getStatusLabel(activeStatus)}
            </div>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                      No Tracking
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                      Nama
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                      NIK
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                      Jenis Surat
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                      Tanggal
                    </th>
                    {activeStatus === "selesai" && (
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                        No Surat
                      </th>
                    )}
                    {activeStatus === "ditolak" && (
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                        Keterangan
                      </th>
                    )}
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                      Dokumen
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>
                    {(activeStatus === "diajukan" ||
                      activeStatus === "diproses") && (
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                        Aksi
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {item.noPengajuan}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {item.namaLengkap}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {item.noNIK}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {item.jenisSurat}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {item.tanggalPengajuan}
                        {item.tanggalSelesai && ` - ${item.tanggalSelesai}`}
                      </td>
                      {activeStatus === "selesai" && (
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {item.noPengajuan}
                        </td>
                      )}
                      {activeStatus === "ditolak" && (
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {item.keterangan}
                        </td>
                      )}
                      <td className="py-3 px-4 text-sm">
                        <button
                          onClick={() => viewDocuments(item)}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Lihat
                        </button>
                      </td>
                      <td className="py-3 px-4 text-sm whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.status === "diajukan"
                              ? "bg-blue-100 text-blue-800"
                              : item.status === "diproses"
                              ? "bg-yellow-100 text-yellow-800"
                              : item.status === "selesai"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {getStatusLabel(item.status)}
                        </span>
                      </td>
                      {activeStatus === "diajukan" && (
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleProses(item.id)}
                              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
                            >
                              Proses
                            </button>
                            <button
                              onClick={() => handleTolak(item.id)}
                              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
                            >
                              Tolak
                            </button>
                          </div>
                        </td>
                      )}
                      {activeStatus === "diproses" && (
                        <td className="py-3 px-4">
                          <button
                            onClick={() => handleSelesai(item.id)}
                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
                          >
                            Selesai
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Dokumen Modal */}
      {selectedPengajuan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Dokumen Pengajuan</h3>
                <button
                  onClick={() => setSelectedPengajuan(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2 text-gray-800">Detail Pengajuan</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">
                      Nama: {selectedPengajuan.namaLengkap}
                    </p>
                    <p className="text-sm text-gray-600">
                      NIK: {selectedPengajuan.noNIK}
                    </p>
                    <p className="text-sm text-gray-600">
                      No KK: {selectedPengajuan.noKK}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      Jenis Surat: {selectedPengajuan.jenisSurat}
                    </p>
                    <p className="text-sm text-gray-600">
                      Tanggal Pengajuan: {selectedPengajuan.tanggalPengajuan}
                    </p>
                    {selectedPengajuan.status === "selesai" && (
                      <p className="text-sm text-gray-600">
                        No Surat: {selectedPengajuan.noPengajuan}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedPengajuan.fileKTP && (
                  <div className="border border-gray-400 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-gray-700">KTP</h4>
                    {selectedPengajuan.fileKTP.startsWith("/uploads/") ? (
                      <img
                        src={selectedPengajuan.fileKTP}
                        alt="KTP"
                        className="max-w-full h-auto border"
                      />
                    ) : (
                      <img
                        src={`data:image/jpeg;base64,${selectedPengajuan.fileKTP}`}
                        alt="KTP"
                        className="max-w-full h-auto border"
                      />
                    )}
                  </div>
                )}

                {selectedPengajuan.fileKK && (
                  <div className="border border-gray-400 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-gray-700">Kartu Keluarga</h4>
                    {selectedPengajuan.fileKK.startsWith("/uploads/") ? (
                      <img
                        src={selectedPengajuan.fileKK}
                        alt="KK"
                        className="max-w-full h-auto border"
                      />
                    ) : (
                      <img
                        src={`data:image/jpeg;base64,${selectedPengajuan.fileKK}`}
                        alt="KK"
                        className="max-w-full h-auto border"
                      />
                    )}
                  </div>
                )}

                {selectedPengajuan.filePengantarRT && (
                  <div className="border border-gray-400 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-gray-700">Surat Pengantar RT/RW</h4>
                    {selectedPengajuan.filePengantarRT.endsWith(".pdf") ? (
                      <iframe
                        src={
                          selectedPengajuan.filePengantarRT.startsWith(
                            "/uploads/"
                          )
                            ? selectedPengajuan.filePengantarRT
                            : `data:application/pdf;base64,${selectedPengajuan.filePengantarRT}`
                        }
                        className="w-full h-64 border"
                        title="Surat Pengantar RT/RW"
                      />
                    ) : selectedPengajuan.filePengantarRT.startsWith(
                        "/uploads/"
                      ) ? (
                      <img
                        src={selectedPengajuan.filePengantarRT}
                        alt="Pengantar RT/RW"
                        className="max-w-full h-auto border"
                      />
                    ) : (
                      <img
                        src={`data:image/jpeg;base64,${selectedPengajuan.filePengantarRT}`}
                        alt="Pengantar RT/RW"
                        className="max-w-full h-auto border"
                      />
                    )}
                  </div>
                )}

                {selectedPengajuan.filePermohonan && (
                  <div className="border border-gray-400 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-gray-700">Surat Permohonan</h4>
                    {selectedPengajuan.filePermohonan.endsWith(".pdf") ? (
                      <iframe
                        src={
                          selectedPengajuan.filePermohonan.startsWith(
                            "/uploads/"
                          )
                            ? selectedPengajuan.filePermohonan
                            : `data:application/pdf;base64,${selectedPengajuan.filePermohonan}`
                        }
                        className="w-full h-64 border"
                        title="Surat Permohonan"
                      />
                    ) : selectedPengajuan.filePermohonan.startsWith(
                        "/uploads/"
                      ) ? (
                      <img
                        src={selectedPengajuan.filePermohonan}
                        alt="Surat Permohonan"
                        className="max-w-full h-auto border"
                      />
                    ) : (
                      <img
                        src={`data:image/jpeg;base64,${selectedPengajuan.filePermohonan}`}
                        alt="Surat Permohonan"
                        className="max-w-full h-auto border"
                      />
                    )}
                  </div>
                )}

                {selectedPengajuan.jenisSurat === "Keterangan Usaha" &&
                  selectedPengajuan.fileIzinUsaha && (
                    <div className="border border-gray-400 rounded-lg p-4">
                      <h4 className="font-medium mb-2 text-gray-700">Izin Usaha</h4>
                      {selectedPengajuan.fileIzinUsaha.endsWith(".pdf") ? (
                        <iframe
                          src={
                            selectedPengajuan.fileIzinUsaha.startsWith(
                              "/uploads/"
                            )
                              ? selectedPengajuan.fileIzinUsaha
                              : `data:application/pdf;base64,${selectedPengajuan.fileIzinUsaha}`
                          }
                          className="w-full h-64 border"
                          title="Izin Usaha"
                        />
                      ) : selectedPengajuan.fileIzinUsaha.startsWith(
                          "/uploads/"
                        ) ? (
                        <img
                          src={selectedPengajuan.fileIzinUsaha}
                          alt="Izin Usaha"
                          className="max-w-full h-auto border"
                        />
                      ) : (
                        <img
                          src={`data:image/jpeg;base64,${selectedPengajuan.fileIzinUsaha}`}
                          alt="Izin Usaha"
                          className="max-w-full h-auto border"
                        />
                      )}
                    </div>
                  )}

                {selectedPengajuan.jenisSurat === "Keterangan Kurang Mampu" &&
                  selectedPengajuan.filePernyataan && (
                    <div className="border border-gray-400 rounded-lg p-4">
                      <h4 className="font-medium mb-2 text-gray-700">
                        Pernyataan Tidak Mampu
                      </h4>
                      {selectedPengajuan.filePernyataan.endsWith(".pdf") ? (
                        <iframe
                          src={
                            selectedPengajuan.filePernyataan.startsWith(
                              "/uploads/"
                            )
                              ? selectedPengajuan.filePernyataan
                              : `data:application/pdf;base64,${selectedPengajuan.filePernyataan}`
                          }
                          className="w-full h-64 border"
                          title="Pernyataan Tidak Mampu"
                        />
                      ) : selectedPengajuan.filePernyataan.startsWith(
                          "/uploads/"
                        ) ? (
                        <img
                          src={selectedPengajuan.filePernyataan}
                          alt="Pernyataan Tidak Mampu"
                          className="max-w-full h-auto border"
                        />
                      ) : (
                        <img
                          src={`data:image/jpeg;base64,${selectedPengajuan.filePernyataan}`}
                          alt="Pernyataan Tidak Mampu"
                          className="max-w-full h-auto border"
                        />
                      )}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
