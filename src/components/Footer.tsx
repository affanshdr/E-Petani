import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-yellow-100 py-10 px-6 text-sm text-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
        {/* Left Section - Navigation Links */}
        <div className="mb-6 md:mb-0 md:w-1/4">
          <h4 className="font-bold mb-3 text-gray-800">Menu</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" className="hover:text-orange-600 transition-colors">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/lacak-pengajuan" className="hover:text-orange-600 transition-colors">
                Lacak Pengajuan
              </Link>
            </li>
            <li>
              <Link href="/panduan" className="hover:text-orange-600 transition-colors">
                Panduan
              </Link>
            </li>
          </ul>
        </div>

        {/* Center Section - Office Info */}
        <div className="mb-6 md:mb-0 md:w-2/4">
  {/* Hanya judul "Info Kantor" yang di-center */}
  <h4 className="font-bold mb-3 text-gray-800 ml-30">Info Kantor</h4>
  
  <div className="flex flex-col items-start"> {/* Ubah dari items-center ke items-start */}
  <div>
              <h5 className="font-bold mb-2">Alamat</h5>
              <p className="text-gray-600">
                Jalan Keupula, Komplek Mushalla Darul<br />
                Faizin, Dusun Timur, Gampong Kopelma<br />
                Darussalam Sylah Kuala Banda Aceh 23III
              </p>
            </div>
    <div className="mt-3 text-left"> {/* Tambahkan text-left */}
      <p className="font-semibold mb-2">Jam Kerja </p>
      <p>Senin-Jumat</p>
      <p>09.00-17.00</p>
    </div>
  </div>
</div>

        {/* Right Section - Contact & Social */}
        <div className="md:w-1/4">
          <h4 className="font-bold mb-3 text-gray-800">Kontak</h4>
          <div className="space-y-2">
            <p>Telp: +62853 2335 5412</p>
            <p>Email: SiKeuchik@gmail.com</p>
            <div className="flex gap-3 mt-3 justify-center md:justify-start">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                📘 Facebook
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                📸 Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 mt-8 pt-6">
        <p className="text-center">© 2025 oleh Kelompok 4 Sistem Informasi</p>
      </div>
    </footer>
  );
}