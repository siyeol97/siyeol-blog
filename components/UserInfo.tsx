'use client';

import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import DefaultAvatar from './DefaultAvatar';
import styles from './UserInfo.module.css';
import { useState } from 'react';

export default function UserInfo({ session }: { session: Session }) {
  const isAuthorized =
    session.user?.email === 'leesi2830@naver.com' || 'test1@naver.com';
  const [isToggle, setIsToggle] = useState(false);

  const handleClick = () => {
    setIsToggle((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      {isAuthorized && (
        <Link
          href={'/write'}
          className={styles.write_button}
        >
          새 글 쓰기
        </Link>
      )}
      <div className={styles.user_session}>
        {session.user?.image ? (
          <div
            className={styles.avatar}
            onClick={handleClick}
          >
            <Image
              src={session.user.image}
              alt='avatar'
              fill
              sizes='35px'
            />
          </div>
        ) : (
          <div
            style={{ cursor: 'pointer' }}
            onClick={handleClick}
          >
            <DefaultAvatar name={session.user!.name?.slice(-2)} />
          </div>
        )}
        {isToggle ? (
          <div className={styles.user_menu}>
            <div className={styles.user_menu_box}>
              <p className={styles.user_menu_name}>{session.user?.name}</p>
              <p className={styles.user_menu_email}>{session.user?.email}</p>
            </div>
            <hr />
            <button
              onClick={() => {
                signOut();
              }}
              className={styles.logout_button}
            >
              로그아웃
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
