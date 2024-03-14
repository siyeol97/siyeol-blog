'use client';

import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import DefaultAvatar from './DefaultAvatar';
import styles from './UserInfo.module.css';

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
        <DefaultAvatar name={session.user!.name?.slice(-2)} />
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
