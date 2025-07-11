// app/produk/layout.tsx
import React from 'react';

// Anda bisa mengimpor komponen seperti header, footer, atau sidebar di sini
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

interface ProdukLayoutProps {
  children: React.ReactNode;
}

const ProdukLayout: React.FC<ProdukLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          {/* Header khusus untuk bagian produk (opsional) */}
          {/* <Header title="Navigasi Produk" /> */}
          <nav style={{ marginBottom: '15px', backgroundColor: '#f0f0f0', padding: '10px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '20px' }}>
              <li><a href="/produk">Semua Produk</a></li>
              <li><a href="/produk/kategori-a">Kategori A</a></li>
              <li><a href="/produk/kategori-b">Kategori B</a></li>
              {/* Tambahkan link navigasi lain yang relevan dengan produk */}
            </ul>
          </nav>

          <main>
            {children} {/* Ini adalah tempat di mana `page.tsx` di dalam folder `produk` akan dirender */}
          </main>

          {/* Footer khusus untuk bagian produk (opsional) */}
          {/* <Footer text="Hak Cipta © Produk Kami" /> */}
        </div>
      </body>
    </html>
  );
};

export default ProdukLayout;