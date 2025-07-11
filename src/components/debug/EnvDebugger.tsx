// src/components/debug/EnvDebugger.tsx

// Komponen ini HANYA untuk debugging di environment DEVELOPMENT
// JANGAN gunakan ini di production

export const EnvDebugger = () => {
  // Komponen ini harus berupa Server Component untuk bisa mengakses process.env
  const nextAuthUrl = process.env.NEXTAUTH_URL;
  const nextAuthSecret = process.env.NEXTAUTH_SECRET;

  // Kita hanya menampilkan sebagian kecil dari secret untuk keamanan
  const secretPreview = nextAuthSecret ? `${nextAuthSecret.substring(0, 5)}...` : 'TIDAK DITEMUKAN';
  const isDevelopment = process.env.NODE_ENV === 'development';

  if (!isDevelopment) {
    return null; // Jangan render apapun jika bukan di development
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-yellow-300 text-black p-4 border-t-4 border-red-500 z-50">
      <h3 className="font-bold text-lg">[DEBUGGER VARIABEL LINGKUNGAN]</h3>
      <p className="text-sm">Hapus komponen ini dari halaman Anda sebelum production.</p>
      <div className="mt-2 text-sm font-mono">
        <p>
          <span className="font-bold">NEXTAUTH_URL:</span> 
          <span className={`ml-2 ${nextAuthUrl ? 'text-green-700' : 'text-red-700 font-bold'}`}>
            {nextAuthUrl || 'TIDAK DITEMUKAN'}
          </span>
        </p>
        <p>
          <span className="font-bold">NEXTAUTH_SECRET:</span> 
          <span className={`ml-2 ${nextAuthSecret ? 'text-green-700' : 'text-red-700 font-bold'}`}>
            {secretPreview}
          </span>
        </p>
      </div>
    </div>
  );
};
