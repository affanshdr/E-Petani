"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiLock, FiEye, FiEyeOff, FiAlertCircle } from "react-icons/fi";
import Navbar from "../../components/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      // Panggil API untuk login
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Email atau password salah");
      }

      // Simpan data user jika perlu
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      // Redirect ke dashboard sesuai role
      if (data.user?.role === "admin") {
        router.push("/admin-dashboard");
      } else {
        router.push("/Admin-Dashboard");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ fontFamily: "var(--font-poppins)" }} className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 to-yellow-100">
      <Navbar />

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Left Side - Animated Illustration */}
        <motion.div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-200 relative overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          {/* Floating elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-white/20 rounded-full"
            animate={{
              y: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Main illustration with floating effect */}
          <motion.img
            src="/login-ilustrasii.png"
            alt="Login Illustration"
            className="max-w-md w-full relative z-10"
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Right Side - Form */}
        <div className="flex flex-1 items-center justify-center p-6">
          <motion.div
            className="w-full max-w-md bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Decorative elements */}
            <motion.div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-300/20 rounded-full" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} />
            <motion.div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-400/20 rounded-full" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} />

            <motion.div className="text-center mb-8 relative z-10" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
              <motion.h1 className="text-4xl font-bold text-gray-800" initial={{ y: -20 }} animate={{ y: 0 }} transition={{ delay: 0.5 }}>
                SIMAK
              </motion.h1>
              <motion.h2 className="text-lg font-semibold text-yellow-600 mt-1" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.6 }}>
                Masuk Sebagai Admin
              </motion.h2>
            </motion.div>

            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              {/* Email */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                <label htmlFor="email" className="text-sm font-medium text-yellow-600 mb-1 block">
                  Email
                </label>
                <div className="flex items-center bg-white/60 border border-gray-300 rounded-lg px-3 transition-all focus-within:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-200">
                  <FiMail className="text-gray-700" />
                  <input type="email" id="email" placeholder="email kamu@example.com" className="w-full px-3 py-2 bg-transparent focus:outline-none text-gray-700" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </motion.div>

              {/* Password */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                <label htmlFor="password" className="text-sm font-medium text-yellow-600 mb-1 block">
                  Password
                </label>
                <div className="flex items-center bg-white/60 border border-gray-300 rounded-lg px-3 transition-all focus-within:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-200">
                  <FiLock className="text-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 bg-transparent focus:outline-none text-gray-600"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button type="button" className="text-gray-500 hover:text-yellow-600 transition-colors" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </motion.div>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                    <div className="flex items-center gap-2 text-red-500 bg-red-50 px-3 py-2 rounded-lg text-sm">
                      <FiAlertCircle />
                      <span>{error}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-medium rounded-lg shadow-md relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                disabled={isSubmitting}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="inline-block">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                        </svg>
                      </motion.span>
                      Memproses...
                    </>
                  ) : (
                    "Masuk"
                  )}
                </span>
                {isSubmitting && <motion.span className="absolute bottom-0 left-0 h-1 bg-yellow-600/30" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5 }} />}
              </motion.button>
            </form>

            {/* Footer */}
            <motion.div className="text-center mt-6 text-sm text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
