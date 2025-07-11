// app/(auth)/register/page.tsx
"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Import komponen UI dari Shadcn/UI (pastikan sudah di-setup)
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { registerUser } from "./_actions/register"; // Server action kita

// Skema validasi menggunakan Zod
const formSchema = z.object({
  name: z.string().min(3, { message: "Nama harus lebih dari 3 karakter." }),
  email: z.string().email({ message: "Format email tidak valid." }),
  password: z.string().min(6, { message: "Password minimal 6 karakter." }),
  role: z.enum(["PETANI", "SUPLIER"] as const)
    .refine((val) => !!val, {
    message: "Anda harus memilih peran.",
  }),
});

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setError(null);
    setSuccess(null);

    startTransition(async () => {
      const result = await registerUser(values);
      if (result.error) {
        setError(result.error);
      } else {
        setSuccess(result.success ?? "Pendaftaran berhasil! Anda akan dialihkan ke halaman login.");
        // Redirect ke halaman login setelah 2 detik
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-green-700">
            E-Petani
          </CardTitle>
          <CardDescription>
            Buat akun untuk memulai perjalanan agrikultur Anda.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Nama Lengkap / Usaha</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Contoh: Budi Santoso"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="email@contoh.com"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="******"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Daftar sebagai</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={isPending}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih peran Anda" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="PETANI">Petani</SelectItem>
                        <SelectItem value="SUPLIER">Suplier</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md text-sm">
                  {success}
                </div>
              )}

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isPending}>
                {isPending ? "Mendaftarkan..." : "Buat Akun"}
              </Button>
            </form>
          </Form>

          <div className="mt-4 text-center text-sm">
            Sudah punya akun?{" "}
            <a href="/login" className="underline text-green-600">
              Login di sini
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
