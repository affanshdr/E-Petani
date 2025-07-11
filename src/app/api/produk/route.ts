// src/app/api/produk/route.ts
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search");

    const whereClause = search
      ? {
          name: {
            contains: search,
            mode: "insensitive" as const, // Pencarian tidak case-sensitive
          },
        }
      : {};

    const products = await db.product.findMany({
      where: whereClause,
      // Anda bisa menambahkan filter lain di sini nanti, seperti 'orderBy' atau 'kategori'
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("[API_PRODUK_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
