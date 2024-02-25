'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Button from './Button';

export default function SignInUpButton() {
  return (
    <div>
      <Button
        onClick={() => {
          signIn();
        }}
      >
        Sign in
      </Button>
      <Button>
        <Link href={'/register'}>Sign up</Link>
      </Button>
    </div>
  );
}
