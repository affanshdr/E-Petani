// src/app/(main)/layout.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { User as UserIcon } from "lucide-react";
import { LogoutButton } from "./_components/LogoutButton";

// Komponen Header
const Header = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return null;
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-700">
          E-Petani
        </Link>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 hidden sm:block">
            Halo, <span className="font-semibold">{session.user.name}</span>
          </span>
          
          {/* PERUBAHAN DI SINI: Ikon dibungkus dengan Link */}
          <Link 
            href="/main/profile" 
            className="flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors" 
            aria-label="Profil"
            title="Lihat Profil"
          >
            <UserIcon className="h-5 w-5 text-gray-700" />
          </Link>
          
          <LogoutButton />
        </div>
      </nav>
    </header>
  );
};


export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
