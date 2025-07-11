// src/middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  const publicPaths = ["/landing", "/auth/login", "/auth/register"];
  const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));
  const isRootPath = pathname === '/';

  if (isRootPath) {
    return NextResponse.redirect(new URL('/landing', req.url));
  }

  if (token) {
    if (isPublicPath) {
      const role = token.role as string;
      // PERUBAHAN DI SINI: Tambahkan '/main' di depan URL dashboard
      const dashboardUrl = role === 'SUPLIER' ? '/main/dashboard/suplier' : '/main/dashboard/petani';
      return NextResponse.redirect(new URL(dashboardUrl, req.url));
    }
  } 
  else {
    if (!isPublicPath) {
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
