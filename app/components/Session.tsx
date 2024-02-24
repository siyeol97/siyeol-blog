import getUserData from '@/utils/getUserData';
import Link from 'next/link';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import SignupButton from './SignupButton';

export default async function Session() {
  const userData = await getUserData();

  return (
    <div>
      {userData.name ? (
        <>
          <span>{userData.name}</span>
          <span>{userData.email}</span>
          <Link href={'/write'}>새 글 쓰기</Link>
          <LogoutButton />
        </>
      ) : (
        <>
          <LoginButton />
          <SignupButton />
        </>
      )}
    </div>
  );
}
