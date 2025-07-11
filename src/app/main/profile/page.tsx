// src/app/main/profile/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { User, Mail, Phone, MapPin } from "lucide-react";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/auth/login");
  }

  const user = await db.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8">Profil Saya</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-gray-500" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-500 capitalize">{user.role.toLowerCase()}</p>
            <div className="mt-4 space-y-2 text-gray-700">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-gray-500" />
                <span>{user.email || "Email belum diatur"}</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>{user.phone || "Nomor HP belum diatur"}</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>{user.location || "Lokasi belum diatur"}</span>
              </div>
            </div>
            <div className="mt-6">
                <button className="bg-green-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-green-700 transition-colors">
                    Edit Profil
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
