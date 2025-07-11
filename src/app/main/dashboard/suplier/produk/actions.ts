// src/app/main/dashboard/suplier/produk/actions.ts
"use server";

import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

const productSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
  price: z.coerce.number().min(1),
  stock: z.coerce.number().int().min(0),
  imageUrl: z.string().url(),
});

export async function createProduct(values: z.infer<typeof productSchema>) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id || session.user.role !== 'SUPLIER') {
    return { error: "Akses ditolak. Anda bukan suplier." };
  }

  const validatedFields = productSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Data tidak valid." };
  }

  try {
    await db.product.create({
      data: {
        ...validatedFields.data,
        suplierId: session.user.id,
      },
    });

    // Memberitahu Next.js untuk memuat ulang data di halaman produk
    revalidatePath("/main/dashboard/suplier/produk");

    return { success: "Produk berhasil ditambahkan." };

  } catch (error) {
    console.error("GAGAL MEMBUAT PRODUK:", error);
    return { error: "Gagal menyimpan produk ke database." };
  }
}
