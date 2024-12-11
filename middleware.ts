import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const session = await getToken({ req: request });
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/write') || pathname.startsWith('/edit')) {
    if (!session) {
      return NextResponse.redirect(
        'https://siyeol-blog.vercel.app/auth/signin'
      );
    }
  }

  if (pathname.startsWith('/auth/signin') || pathname.startsWith('/register')) {
    if (session) {
      return NextResponse.redirect('https://siyeol-blog.vercel.app/');
    }
  }
}
