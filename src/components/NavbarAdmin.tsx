import Link from "next/link";
import React from "react";
import {
  FaHome,
  FaInbox,
  FaArchive,
  FaFileAlt,
  FaChartBar,
  FaUser,
  FaPowerOff,
} from "react-icons/fa";
import { motion } from "framer-motion";

const NavbarAdmin = ({ currentPath }: { currentPath: string }) => {
  // Fungsi untuk menentukan apakah path saat ini aktif
  const isActive = (path: string) => currentPath === path;

  return (
    <div
      style={{ fontFamily: "var(--font-poppins)" }}
      className="w-64 h-screen bg-[#FFF2E3] text-black fixed left-0 top-0 p-6 shadow-lg font-poppins flex flex-col"
    >
      {/* Logo & Title - Animated */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex items-center space-x-3"
      >
        <motion.img
          whileHover={{ rotate: 10 }}
          src="/logo-simak.png"
          alt="Logo"
          className="w-12 h-12"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-[#FF8C42]"
        >
          SiKeuchik
        </motion.h1>
      </motion.div>

      <nav className="flex-1 flex flex-col justify-between">
        <div className="space-y-8">
          {/* Dashboard */}
          <div>
            <ul className="space-y-4">
              <Link href="/Admin-Dashboard" passHref>
                <motion.li
                  whileHover={{ x: 5 }}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition-colors cursor-pointer ${
                    isActive("/Admin-Dashboard")
                      ? "bg-orange-200 font-semibold"
                      : "hover:bg-orange-200"
                  }`}
                >
                  <FaHome
                    className={`${
                      isActive("/Admin-Dashboard")
                        ? "text-orange-600"
                        : "text-orange-500"
                    }`}
                  />
                  <span>Dashboard</span>
                </motion.li>
              </Link>
            </ul>
          </div>

          {/* Surat Section */}
          <div>
            <h2 className="text-xs text-gray-500 uppercase tracking-wider pl-2">
              SURAT
            </h2>
            <ul className="space-y-2">
              <Link href="/admin/pengajuan-masuk" passHref>
                <motion.li
                  whileHover={{ x: 5 }}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition-colors cursor-pointer ${
                    isActive("/admin/pengajuan-masuk")
                      ? "bg-orange-200 font-semibold"
                      : "hover:bg-orange-200"
                  }`}
                >
                  <FaInbox
                    className={`${
                      isActive("/admin/pengajuan-masuk")
                        ? "text-orange-600"
                        : "text-orange-500"
                    }`}
                  />
                  <span>Pengajuan Masuk</span>
                </motion.li>
              </Link>

              <Link href="/admin/arsip" passHref>
                <motion.li
                  whileHover={{ x: 5 }}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition-colors cursor-pointer ${
                    isActive("/admin/arsip")
                      ? "bg-orange-200 font-semibold"
                      : "hover:bg-orange-200"
                  }`}
                >
                  <FaArchive
                    className={`${
                      isActive("/admin/arsip")
                        ? "text-orange-600"
                        : "text-orange-500"
                    }`}
                  />
                  <span>Arsip</span>
                </motion.li>
              </Link>

              <Link href="/template-surat" passHref>
                <motion.li
                  whileHover={{ x: 5 }}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition-colors cursor-pointer ${
                    isActive("/admin/template-surat")
                      ? "bg-orange-200 font-semibold"
                      : "hover:bg-orange-200"
                  }`}
                >
                  <FaFileAlt
                    className={`${
                      isActive("/admin/template-surat")
                        ? "text-orange-600"
                        : "text-orange-500"
                    }`}
                  />
                  <span>Template Surat</span>
                </motion.li>
              </Link>

              <Link href="/Admin-Laporan" passHref>
                <motion.li
                  whileHover={{ x: 5 }}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition-colors cursor-pointer ${
                    isActive("/Admin-Laporan")
                      ? "bg-orange-200 font-semibold"
                      : "hover:bg-orange-200"
                  }`}
                >
                  <FaChartBar
                    className={`${
                      isActive("/Admin-Laporan")
                        ? "text-orange-600"
                        : "text-orange-500"
                    }`}
                  />
                  <span>Laporan</span>
                </motion.li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Animated */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Pengaturan */}
          <div className="mb-6">
            <h2 className="text-xs text-gray-500 uppercase tracking-wider mb-3 pl-2">
              PENGATURAN
            </h2>
            <ul className="space-y-2">
              <Link href="/data-warga" passHref>
                <motion.li
                  whileHover={{ x: 5 }}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition-colors cursor-pointer ${
                    isActive("/admin/data-warga")
                      ? "bg-orange-200 font-semibold"
                      : "hover:bg-orange-200"
                  }`}
                >
                  <FaUser
                    className={`${
                      isActive("/admin/data-warga")
                        ? "text-orange-600"
                        : "text-orange-500"
                    }`}
                  />
                  <span>Data Warga</span>
                </motion.li>
              </Link>
            </ul>
          </div>

          {/* Logout Button */}
          <div className="flex justify-center">
            <Link href="/" passHref>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full w-full shadow-md transition-all"
              >
                <FaPowerOff className="text-lg" />
                <span className="font-medium">Keluar</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </nav>
    </div>
  );
};

export default NavbarAdmin;
