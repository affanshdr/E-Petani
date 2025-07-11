// src/app/main/dashboard/petani/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { Search, Filter, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { Product } from '@/generated/prisma'; // Impor tipe Product

const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
    <div className="relative w-full h-48">
      <Image 
        src={product.imageUrl || 'https://placehold.co/400x400/eee/ccc?text=Gambar'} 
        alt={product.name} 
        fill={true}
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        style={{ objectFit: 'cover' }}
        className="group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-4 flex flex-col h-full">
      <h3 className="font-semibold text-lg truncate flex-grow">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2">Stok: {product.stock}</p>
      <p className="font-bold text-green-600 text-xl">
        Rp {product.price.toLocaleString('id-ID')}
      </p>
      <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
        + Keranjang
      </button>
    </div>
  </div>
);

export default function PetaniDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Debounce untuk mencegah pemanggilan API pada setiap ketikan
    const handler = setTimeout(() => {
      const fetchProducts = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(`/api/produk?search=${searchTerm}`);
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Gagal mengambil data produk:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchProducts();
    }, 500); // Tunggu 500ms setelah user berhenti mengetik

    return () => {
      clearTimeout(handler); // Bersihkan timeout jika user mengetik lagi
    };
  }, [searchTerm]);

  return (
    <div className="container mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Marketplace</h1>
        <p className="text-gray-600">Temukan semua kebutuhan pertanian Anda di sini.</p>
        <div className="mt-4 flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Cari pupuk, benih, alat..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg hover:bg-gray-50">
            <Filter size={20} />
            <span className="hidden sm:inline">Filter</span>
          </button>
        </div>
      </header>

      <main>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-green-600" />
            <p className="ml-2">Memuat produk...</p>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center h-64 flex flex-col justify-center items-center">
             <h3 className="text-xl font-semibold">Produk tidak ditemukan</h3>
             <p className="text-gray-500">Coba gunakan kata kunci lain.</p>
          </div>
        )}
      </main>
    </div>
  );
}
