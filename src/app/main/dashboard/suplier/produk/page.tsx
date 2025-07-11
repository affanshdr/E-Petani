// app/produk/page.tsx
import React from 'react';

const ProdukIndexPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Daftar Produk</h1>
      <p>Ini adalah halaman utama untuk menampilkan semua produk.</p>
      {/* Berdasarkan referensi gambar kedua, ini bisa jadi halaman "Marketplace" atau "Homebar"
          yang menampilkan daftar produk, pencarian, filter, dll. */}
      {/* Contoh: <ProductList /> atau <ProductFilter /> */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {/* Contoh item produk */}
        <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
          <h3>Produk 1: Apel Segar</h3>
          <p>Harga: Rp 20.000 / kg</p>
          <img src="/images/apple.jpg" alt="Apel Segar" style={{ maxWidth: '100%', height: 'auto' }} />
          <button>Lihat Detail</button>
        </div>
        <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
          <h3>Produk 2: Cabai Rawit</h3>
          <p>Harga: Rp 15.000 / ons</p>
          <img src="/images/chili.jpg" alt="Cabai Rawit" style={{ maxWidth: '100%', height: 'auto' }} />
          <button>Lihat Detail</button>
        </div>
        {/* ... tambahkan lebih banyak produk sesuai kebutuhan */}
      </div>
    </div>
  );
};

export default ProdukIndexPage;