'use client';

import { signIn } from 'next-auth/react';
import { useRef } from 'react';
import styles from './Credential.module.css';

export default function Credential() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async () => {
    await signIn('credentials', {
      email: emailRef.current,
      password: passwordRef.current,
      redirect: true,
      callbackUrl: '/',
    });
  };
  return (
    <section className={styles.container}>
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        name='email'
        type='email'
        autoFocus={true}
        placeholder='Email *'
        ref={emailRef}
        // eslint-disable-next-line
        onChange={(e: any) => {
          emailRef.current = e.target.value;
        }}
        required
        autoComplete='user-name'
      />
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        name='password'
        type='password'
        placeholder='Password *'
        ref={passwordRef}
        // eslint-disable-next-line
        onChange={(e: any) => {
          passwordRef.current = e.target.value;
        }}
        required
        autoComplete='current-password'
      />
      <button onClick={handleSubmit}>로그인</button>
    </section>
  );
}
