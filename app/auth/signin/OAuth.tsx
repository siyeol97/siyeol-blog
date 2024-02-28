'use client';

import { signIn } from 'next-auth/react';

export default function OAuth() {
  const handleGithub = async (provider: string) => {
    await signIn(provider, {
      redirect: true,
      callbackUrl: '/',
    });
  };
  return (
    <div>
      <p>소셜 로그인</p>
      <button onClick={() => handleGithub('github')}>github login</button>
      <button onClick={() => handleGithub('google')}>google login</button>
    </div>
  );
}
