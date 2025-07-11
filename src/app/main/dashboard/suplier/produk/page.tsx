// src/app/main/dashboard/suplier/produk/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { AddProductDialog } from "./_components/AddProductDialog";

export default async function ManajemenProdukPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id || session.user.role !== 'SUPLIER') {
    // Jika bukan suplier, arahkan ke halaman yang sesuai
    redirect("/main/dashboard/petani");
  }

  // Ambil produk yang hanya dimiliki oleh suplier yang sedang login
  const products = await db.product.findMany({
    where: {
      suplierId: session.user.id,
    },
    orderBy: {
      name: 'asc',
    },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Manajemen Produk</h1>
        <AddProductDialog />
      </div>
      
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[80px]">Gambar</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Nama Produk</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground hidden md:table-cell">Harga</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground hidden md:table-cell">Stok</th>
                <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Aksi</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product.id} className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle">
                      <Image src={product.imageUrl} alt={product.name} width={50} height={50} className="rounded-md object-cover" />
                    </td>
                    <td className="p-4 align-middle font-medium">{product.name}</td>
                    <td className="p-4 align-middle hidden md:table-cell">Rp {product.price.toLocaleString('id-ID')}</td>
                    <td className="p-4 align-middle hidden md:table-cell">{product.stock}</td>
                    <td className="p-4 align-middle text-right">
                      <Button variant="outline" size="sm">Edit</Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-muted-foreground">
                    Anda belum memiliki produk. Silakan tambahkan produk baru.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
