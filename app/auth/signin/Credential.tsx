'use client';

import { signIn } from 'next-auth/react';
import { useRef } from 'react';

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
    <div>
      <label htmlFor='email'>이메일</label>
      <input
        id='email'
        name='email'
        type='email'
        autoFocus={true}
        placeholder='이메일 입력해주세요'
        ref={emailRef}
        // eslint-disable-next-line
        onChange={(e: any) => {
          emailRef.current = e.target.value;
        }}
        required
      />
      <label htmlFor='password'>비밀번호</label>
      <input
        name='password'
        type='password'
        placeholder='비밀번호를 입력해 주세요'
        ref={passwordRef}
        // eslint-disable-next-line
        onChange={(e: any) => {
          passwordRef.current = e.target.value;
        }}
        required
      />
      <button onClick={handleSubmit}>로그인</button>
    </div>
  );
}
