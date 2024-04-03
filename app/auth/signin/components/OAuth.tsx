'use client';

import { signIn } from 'next-auth/react';
import styles from '../css/OAuth.module.css';
import Image from 'next/image';

export default function OAuth() {
  const handleGithub = async (provider: string) => {
    await signIn(provider, {
      redirect: true,
      callbackUrl: '/',
    });
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.separator}>
        <hr />
        OR
        <hr />
      </div>
      <button
        onClick={() => handleGithub('github')}
        className={styles.github_button}
      >
        Sign In With Github
        <Image
          src={'/github_light_logo.svg'}
          alt='github-logo'
          width={24}
          height={24}
        />
      </button>
      <button
        onClick={() => handleGithub('google')}
        className={styles.google_button}
      >
        Sign In With Google
        <Image
          src={'/google_logo.svg'}
          alt='google-logo'
          width={24}
          height={24}
        />
      </button>
    </section>
  );
}
