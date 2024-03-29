import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/write')) {
    const session = await getToken({ req: request });
    console.log('middleware : ', session);
    if (!session) {
      return NextResponse.redirect('http://localhost:3000/auth/signin');
    }
  }
}
