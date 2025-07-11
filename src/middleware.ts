// src/middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // PERUBAHAN DI SINI: Sesuaikan dengan path yang benar
  const publicPaths = ["/landing", "/auth/login", "/auth/register"];

  const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));
  const isRootPath = pathname === '/';

  if (isRootPath) {
    return NextResponse.redirect(new URL('/landing', req.url));
  }

  if (token) {
    if (isPublicPath) {
      const role = token.role as string;
      const dashboardUrl = role === 'SUPLIER' ? '/dashboard/suplier' : '/dashboard/petani';
      return NextResponse.redirect(new URL(dashboardUrl, req.url));
    }
  } 
  else {
    if (!isPublicPath) {
      // PERUBAHAN DI SINI: Arahkan ke halaman login yang benar
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|Asset).*)',
  ],
};
