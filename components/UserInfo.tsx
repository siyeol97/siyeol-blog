'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import styles from './UserInfo.module.css';

export default function UserInfo({ userData }: { userData: UserData }) {
  return (
    <div className={styles.wrapper}>
      <Link
        href={'/write'}
        className={styles.write_button}
      >
        새 글 쓰기
      </Link>
      <span>{userData.name}</span>
      <button
        onClick={() => {
          signOut();
        }}
      >
        로그아웃
      </button>
    </div>
  );
}
