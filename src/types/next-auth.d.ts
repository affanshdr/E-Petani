// src/types/next-auth.d.ts
// Pastikan file ini ada di dalam folder src/types

import { Role } from "@/generated/prisma";
import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Memperluas tipe Session untuk menyertakan `id` dan `role`.
   */
  interface Session {
    user: {
      id: string;
      role: Role;
    } & DefaultSession["user"]; // Mempertahankan properti default (name, email, image)
  }

  /**
   * Memperluas tipe User untuk menyertakan `role`.
   */
  interface User {
    role: Role;
  }
}

declare module "next-auth/jwt" {
  /**
   * Memperluas tipe JWT untuk menyertakan `id` dan `role`.
   */
  interface JWT {
    id: string;
    role: Role;
  }
}
