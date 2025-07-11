// src/app/main/dashboard/petani/layout.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, ClipboardList, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';

const SidebarLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const pathname = usePathname();
    // PERUBAHAN DI SINI: Menggunakan pencocokan persis (===) bukan startsWith
    // Ini akan memastikan hanya link yang benar-benar aktif yang mendapat highlight.
    const isActive = pathname === href;

    return (
        <Link 
            href={href} 
            className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:text-green-700 hover:bg-green-50",
                isActive && "bg-green-100 text-green-800 font-semibold"
            )}
        >
            {children}
        </Link>
    );
}

export default function PetaniDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-50 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <h2 className="font-semibold text-lg">Dashboard Petani</h2>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <SidebarLink href="/main/dashboard/petani">
                <LayoutDashboard className="h-4 w-4" />
                Marketplace
              </SidebarLink>
              <SidebarLink href="/main/dashboard/petani/pesanan">
                <ClipboardList className="h-4 w-4" />
                Riwayat Pesanan
              </SidebarLink>
               <SidebarLink href="/main/keranjang">
                <ShoppingBag className="h-4 w-4" />
                Keranjang
              </SidebarLink>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
