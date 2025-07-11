// src/app/landing/page.tsx
import { Leaf, Truck, Users, BarChart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { EnvDebugger } from '@/components/debug/EnvDebugger'; // Pastikan path ini benar

// Komponen untuk setiap kartu benefit
const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
    <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

// Komponen untuk kartu testimoni
const TestimonialCard = ({ name, role, testimony, image }: { name: string, role: string, testimony: string, image: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <Image src={image} alt={`Foto ${name}`} width={80} height={80} className="rounded-full mx-auto mb-4 border-4 border-green-200 object-cover" />
        <p className="text-gray-600 italic mb-4">"{testimony}"</p>
        <h4 className="font-bold text-green-800">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
    </div>
);


export default function LandingPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Komponen Debugger, hanya muncul di mode development */}
      <EnvDebugger />
      
      {/* Header & Navigasi */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/landing" className="text-2xl font-bold text-green-700">
                E-Petani
            </Link>
            <div className="hidden md:flex items-center space-x-6">
                <Link href="#benefits" className="text-gray-600 hover:text-green-600">Manfaat</Link>
                <Link href="#testimonials" className="text-gray-600 hover:text-green-600">Testimoni</Link>
                {/* PERUBAHAN DI SINI */}
                <Link href="/auth/login" className="text-gray-600 hover:text-green-600">Login</Link>
                <Link href="/auth/register" className="bg-green-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-700 transition-colors">
                    Daftar
                </Link>
            </div>
            <div className="md:hidden">
                 {/* PERUBAHAN DI SINI */}
                <Link href="/auth/login" className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    Login
                </Link>
            </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 px-4 bg-cover bg-center" style={{ backgroundImage: "url('/Asset/landingpage.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Revolusi Pertanian di Tangan Anda
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8">
            Hubungkan petani dengan suplier secara langsung. Dapatkan harga terbaik, pilihan terlengkap, dan transparansi penuh.
          </p>
          {/* PERUBAHAN DI SINI */}
          <Link href="/auth/register" className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-colors duration-300">
            Gabung Sekarang
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Kenapa Memilih E-Petani?</h2>
            <p className="text-gray-600 mt-2">Manfaat nyata bagi Petani dan Suplier.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center text-green-700">Untuk Petani</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <BenefitCard icon={<Leaf size={24} />} title="Harga Lebih Murah" description="Beli langsung dari suplier tanpa perantara, hemat biaya operasional Anda." />
                <BenefitCard icon={<Users size={24} />} title="Pilihan Terlengkap" description="Akses berbagai produk dari banyak suplier di seluruh Indonesia." />
                <BenefitCard icon={<BarChart size={24} />} title="Transparansi Penuh" description="Lihat ulasan dan rating dari petani lain sebelum memutuskan membeli." />
                <BenefitCard icon={<Truck size={24} />} title="Logistik Terintegrasi" description="Opsi pengiriman yang fleksibel dan dapat dilacak hingga ke lokasi Anda." />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center text-blue-700">Untuk Suplier</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                 <BenefitCard icon={<Users size={24} />} title="Pasar Lebih Luas" description="Jangkau ribuan petani di seluruh pelosok negeri secara langsung." />
                 <BenefitCard icon={<BarChart size={24} />} title="Margin Lebih Tinggi" description="Tingkatkan keuntungan dengan memotong rantai distribusi yang panjang." />
                 <BenefitCard icon={<Leaf size={24} />} title="Data Pasar Akurat" description="Dapatkan feedback langsung dari pengguna akhir untuk inovasi produk." />
                 <BenefitCard icon={<Truck size={24} />} title="Branding Langsung" description="Bangun reputasi dan merek Anda langsung di kalangan komunitas petani." />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="bg-green-50 py-16 md:py-24 px-4">
          <div className="container mx-auto">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">Apa Kata Mereka?</h2>
                  <p className="text-gray-600 mt-2">Pengalaman nyata dari para pengguna E-Petani.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  <TestimonialCard 
                      name="Budi Santoso" 
                      role="Petani Cabai, Jawa Tengah" 
                      testimony="Sejak pakai E-Petani, biaya pupuk saya turun 20%. Barangnya berkualitas dan langsung diantar ke ladang."
                      image="/Asset/Budi Santoso.png"
                  />
                  <TestimonialCard 
                      name="CV. Tani Makmur" 
                      role="Suplier Pupuk, Jawa Timur" 
                      testimony="Pasar kami jadi lebih luas. Sekarang kami bisa melayani petani dari luar provinsi tanpa lewat tengkulak lagi."
                      image="/Asset/CV. Tani Makmur.jpg"
                  />
                  <TestimonialCard 
                      name="Siti Aminah" 
                      role="Petani Sayuran, Jawa Barat" 
                      testimony="Fitur chat langsung ke suplier sangat membantu. Saya jadi bisa tanya-tanya dulu soal produknya. Sangat transparan!"
                      image="/Asset/sitiaminah.jpg"
                  />
              </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} E-Petani. Seluruh Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}
