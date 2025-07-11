/** @type {import('next').NextConfig} */
const nextConfig = {
  // Blok "redirects" sudah dihapus dari sini.

  // Konfigurasi untuk mengizinkan gambar dari domain eksternal.
  // Bagian ini tetap dipertahankan.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
