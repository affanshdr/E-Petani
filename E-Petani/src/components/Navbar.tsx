'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const currentPath = usePathname();
  
  // Animated underline component
  const Underline = () => (
    <span className="absolute bottom-0 left-0 h-0.5 bg-black w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  );

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-6 shadow-md bg-yellow-500 font-poppins">
      <div className="flex text-3xl font-semibold ml-10 hover:scale-105 transition-transform">
        {/*<Image src="/Asset/Logo.png" width={50} height={50} alt="Logo" />*/}
        <Link href="/">SiKeuchik</Link>
      </div>
      
      <div className="flex space-x-8 font-medium mr-10">
        {[
          { path: '/', name: 'Dashboard' },
          { path: '/lacak-pengajuan', name: 'Lacak Pengajuan' },
          { path: '/panduan', name: 'Panduan' },
          { path: '/login', name: 'Masuk' }
        ].map((item) => (
          <Link 
            key={item.path}
            href={item.path}
            className={`group relative px-1 py-2 ${currentPath === item.path ? 'font-semibold' : 'text-gray-600 hover:text-black'}`}
          >
            {item.name}
            {/* Animated underline shows on hover OR when active */}
            <div className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
              currentPath === item.path 
                ? 'w-full' 
                : 'w-0 group-hover:w-full'
            }`} />
          </Link>
        ))}
      </div>
    </nav>
  );
}