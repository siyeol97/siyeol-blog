'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import styles from './UserInfo.module.css';
import { Session } from 'next-auth';
import Image from 'next/image';

export default function UserInfo({ session }: { session: Session }) {
  return (
    <div className={styles.wrapper}>
      <Link
        href={'/write'}
        className={styles.write_button}
      >
        새 글 쓰기
      </Link>
      {session.user?.image ? (
        <div className={styles.avatar}>
          <Image
            src={session.user.image}
            alt='avatar'
            fill
            sizes='40px'
          />
        </div>
      ) : (
        <div className={styles.default_avatar}>
          {session.user!.name?.slice(-2)}
        </div>
      )}
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
