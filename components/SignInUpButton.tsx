'use client';

import Link from 'next/link';

export default function SignInUpButton() {
  return (
    <div>
      <button>
        <Link href={'/auth/signin'}>로그인</Link>
      </button>
      <button>
        <Link href={'/register'}>회원가입</Link>
      </button>
    </div>
  );
}
