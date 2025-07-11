// src/app/(main)/dashboard/suplier/page.tsx
import { DollarSign, Package, Users } from 'lucide-react';

const StatCard = ({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) => (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div className="flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="text-sm font-medium tracking-tight">{title}</h3>
            {icon}
        </div>
        <div>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">Bulan ini</p>
        </div>
    </div>
);

export default function SuplierDashboardPage() {
    return (
        <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Ringkasan Usaha</h1>
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                <StatCard title="Total Pendapatan" value="Rp 12.500.000" icon={<DollarSign className="w-4 h-4 text-muted-foreground" />} />
                <StatCard title="Produk Terjual" value="+540" icon={<Package className="w-4 h-4 text-muted-foreground" />} />
                <StatCard title="Pelanggan Baru" value="+32" icon={<Users className="w-4 h-4 text-muted-foreground" />} />
            </div>
            <div className="mt-8">
                {/* Di sini nanti bisa ditambahkan grafik atau daftar pesanan terbaru */}
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 h-64 flex items-center justify-center">
                    <p className="text-muted-foreground">Grafik penjualan akan muncul di sini.</p>
                </div>
            </div>
        </div>
    )
}
