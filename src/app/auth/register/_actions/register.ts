// app/(auth)/register/_actions/register.ts
"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";

// Ganti path ini sesuai dengan lokasi file prisma client Anda
import { db } from "@/lib/db"; 

// Skema validasi yang sama dengan di client
const formSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["PETANI", "SUPLIER"]),
});

export async function registerUser(values: z.infer<typeof formSchema>) {
  // 1. Validasi input di sisi server
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Input tidak valid!" };
  }

  const { name, email, password, role } = validatedFields.data;

  // 2. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // 3. Cek apakah email sudah terdaftar
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Email sudah digunakan!" };
    }

    // 4. Buat user baru di database
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    return { success: "Pendaftaran berhasil! Anda akan dialihkan..." };
  } catch (error) {
    console.error("REGISTRATION_ERROR", error);
    return { error: "Terjadi kesalahan pada server." };
  }
}
