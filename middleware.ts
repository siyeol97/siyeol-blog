import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.API_URL;
const LOGIN_URL = `${BASE_URL}/auth/signin`;
const LOGIN_PATH = `/auth/signin`;
const REGISTER_PATH = `/register`;
const WRITE_PATH = `/write`;
const EDIT_PATH = `/edit`;
const HOME_URL = `${BASE_URL}/`;

export async function middleware(request: NextRequest) {
  let session;

  try {
    session = await getToken({ req: request }); // 세션 정보 확인
  } catch (error) {
    console.error('Failed to get token:', error);
    return NextResponse.redirect(LOGIN_URL);
  }

  const pathname = request.nextUrl.pathname;

  // 로그인한 사용자만 접근 가능한 페이지
  if (
    (pathname.startsWith(WRITE_PATH) || pathname.startsWith(EDIT_PATH)) &&
    !session
  ) {
    return NextResponse.redirect(LOGIN_URL);
  }

  // 로그인한 사용자는 접근 불가능한 페이지
  if (
    (pathname.startsWith(LOGIN_PATH) || pathname.startsWith(REGISTER_PATH)) &&
    session
  ) {
    return NextResponse.redirect(HOME_URL);
  }

  // 다음 요청으로 진행
  return NextResponse.next();
}
