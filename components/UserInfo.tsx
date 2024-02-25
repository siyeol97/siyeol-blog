'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import Button from './Button';

export default function UserInfo({ userData }: { userData: UserData }) {
  return (
    <div>
      <span>{userData.name}</span>
      <span>{userData.email}</span>
      <Link href={'/write'}>새 글 쓰기</Link>
      <Button
        onClick={() => {
          signOut();
        }}
      >
        Log out
      </Button>
    </div>
  );
}
