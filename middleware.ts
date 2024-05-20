import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/write') ||
    request.nextUrl.pathname.startsWith('/edit')
  ) {
    const session = await getToken({ req: request });
    const isAuthorized = session?.email === 'leesi2830@naver.com';
    if (!isAuthorized) {
      return NextResponse.redirect('https://siyeol-blog.vercel.app/');
    }
    if (!session) {
      return NextResponse.redirect(
        'https://siyeol-blog.vercel.app/auth/signin'
      );
    }
  }

  if (request.nextUrl.pathname.startsWith('/auth/signin')) {
    const session = await getToken({ req: request });
    if (session) {
      return NextResponse.redirect('https://siyeol-blog.vercel.app/');
    }
  }
}
