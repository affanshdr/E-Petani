// src/app/main/dashboard/petani/pesanan/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClipboardList } from "lucide-react";

const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (status.toLowerCase()) {
        case 'selesai':
            return 'default';
        case 'dikirim':
        case 'diproses':
            return 'secondary';
        case 'menunggu pembayaran':
        case 'dibatalkan':
            return 'destructive';
        default:
            return 'outline';
    }
};

export default async function RiwayatPesananPage() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
        redirect("/auth/login");
    }

    const orders = await db.order.findMany({
        where: {
            petaniId: session.user.id,
        },
        orderBy: {
            createdAt: 'desc', // Tampilkan pesanan terbaru di atas
        },
        include: {
            orderItems: {
                include: {
                    product: true, // Sertakan detail produk di setiap item pesanan
                },
            },
        },
    });

    return (
        <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Riwayat Pesanan Saya</h1>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50">
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">ID Pesanan</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground hidden sm:table-cell">Tanggal</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Total</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order.id} className="border-b transition-colors hover:bg-muted/50">
                                        <td className="p-4 align-middle font-medium">...{order.id.slice(-6)}</td>
                                        <td className="p-4 align-middle text-muted-foreground hidden sm:table-cell">{new Date(order.createdAt).toLocaleDateString('id-ID')}</td>
                                        <td className="p-4 align-middle">Rp {order.totalAmount.toLocaleString('id-ID')}</td>
                                        <td className="p-4 align-middle">
                                            <Badge variant={getStatusVariant(order.status)}>{order.status}</Badge>
                                        </td>
                                        <td className="p-4 align-middle text-right">
                                            <Button variant="outline" size="sm">Detail</Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-muted-foreground">
                                        <ClipboardList className="w-12 h-12 mx-auto mb-2" />
                                        Anda belum memiliki riwayat pesanan.
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
