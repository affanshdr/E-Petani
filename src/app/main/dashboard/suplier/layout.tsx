// src/app/(main)/dashboard/suplier/layout.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Package, ClipboardList, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils'; // Fungsi utilitas dari shadcn

const SidebarLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:text-green-700 hover:bg-green-50",
            isActive && "bg-green-100 text-green-800 font-semibold"
        )}>
            {children}
        </Link>
    );
}

export default function SuplierDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-50 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <h2 className="font-semibold text-lg">Dashboard Suplier</h2>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <SidebarLink href="/dashboard/suplier">
                <LayoutDashboard className="h-4 w-4" />
                Ringkasan
              </SidebarLink>
              <SidebarLink href="/dashboard/suplier/produk">
                <Package className="h-4 w-4" />
                Manajemen Produk
              </SidebarLink>
               <SidebarLink href="/dashboard/suplier/pesanan">
                <ClipboardList className="h-4 w-4" />
                Pesanan Masuk
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
