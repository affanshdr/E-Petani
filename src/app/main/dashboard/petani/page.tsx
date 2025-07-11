// src/app/dashboard/petani/page.tsx
"use client";

import { Search, Filter } from 'lucide-react';
import Image from 'next/image';

// Data mock untuk produk, nanti akan diganti dengan data dari API
const mockProducts = [
  { id: 1, name: 'Pupuk Organik Cair', suplier: 'CV Tani Makmur', price: 75000, image: 'https://placehold.co/400x400/a3e635/14532d?text=Pupuk' },
  { id: 2, name: 'Benih Cabai Rawit Unggul', suplier: 'Jaya Seeds', price: 25000, image: 'https://placehold.co/400x400/f97316/ffffff?text=Benih' },
  { id: 3, name: 'Traktor Tangan Mini', suplier: 'Alat Tani Modern', price: 3500000, image: 'https://placehold.co/400x400/3b82f6/ffffff?text=Alat' },
  { id: 4, name: 'Insektisida Nabati', suplier: 'Bio Pest Control', price: 55000, image: 'https://placehold.co/400x400/8b5cf6/ffffff?text=Pestisida' },
];

const ProductCard = ({ product }: { product: typeof mockProducts[0] }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
    <div className="relative w-full h-48">
      <Image 
        src={product.image} 
        alt={product.name} 
        layout="fill" 
        objectFit="cover" 
        className="group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg truncate">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{product.suplier}</p>
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
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="container mx-auto">
        {/* Header dan Pencarian */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Marketplace</h1>
          <p className="text-gray-600">Temukan semua kebutuhan pertanian Anda di sini.</p>
          <div className="mt-4 flex gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Cari pupuk, benih, alat..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg hover:bg-gray-50">
              <Filter size={20} />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </div>
        </header>

        {/* Daftar Produk */}
        <main>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {mockProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
