// src/app/main/keranjang/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import Link from "next/link";

export default async function KeranjangPage() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
        redirect("/auth/login");
    }

    const cartItems = await db.cartItem.findMany({
        where: {
            userId: session.user.id,
        },
        include: {
            product: true, // Sertakan detail produk
        },
    });

    const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Keranjang Belanja Anda</h1>
            {cartItems.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Daftar Item */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                                <Image 
                                    src={item.product.imageUrl} 
                                    alt={item.product.name} 
                                    width={80} 
                                    height={80} 
                                    className="rounded-md object-cover"
                                />
                                <div className="ml-4 flex-grow">
                                    <h2 className="font-semibold">{item.product.name}</h2>
                                    <p className="text-sm text-gray-500">Rp {item.product.price.toLocaleString('id-ID')}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p>Qty: {item.quantity}</p>
                                    <Button variant="outline" size="icon" className="text-red-500 hover:bg-red-50 hover:text-red-600">
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Ringkasan Pesanan */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                            <h2 className="text-lg font-semibold border-b pb-4 mb-4">Ringkasan Pesanan</h2>
                            <div className="flex justify-between mb-2">
                                <p className="text-gray-600">Subtotal</p>
                                <p>Rp {subtotal.toLocaleString('id-ID')}</p>
                            </div>
                            <div className="flex justify-between mb-4">
                                <p className="text-gray-600">Ongkos Kirim</p>
                                <p>Rp 15.000</p>
                            </div>
                            <div className="border-t pt-4 flex justify-between font-bold text-lg">
                                <p>Total</p>
                                <p>Rp {(subtotal + 15000).toLocaleString('id-ID')}</p>
                            </div>
                            <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                                Lanjut ke Pembayaran
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                    <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">Keranjang Anda kosong</h2>
                    <p className="text-gray-500 mb-6">Ayo, isi dengan produk-produk berkualitas!</p>
                    <Link href="/main/dashboard/petani">
                        <Button className="bg-green-600 hover:bg-green-700">Mulai Belanja</Button>
                    </Link>
                </div>
            )}
        </div>
    );
}
