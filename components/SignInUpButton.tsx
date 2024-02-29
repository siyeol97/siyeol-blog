'use client';

import Link from 'next/link';
import styles from './SignInUpButton.module.css';

export default function SignInUpButton() {
  return (
    <div>
      <Link
        href={'/auth/signin'}
        className={styles.sign_button}
      >
        로그인
      </Link>
    </div>
  );
}
