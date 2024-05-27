'use client';

import { Session } from 'next-auth';
import SignInUpButton from './SignInUpButton';
import UserInfo from './UserInfo';
import { useEffect, useState } from 'react';
import serverSessionAction from '@/utils/serverSessionAction';

export default function UserSession() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const result = await serverSessionAction();
      setSession(result);
    };
    getSession();
  }, []);
  return (
    <div>{session ? <UserInfo session={session} /> : <SignInUpButton />}</div>
  );
}
