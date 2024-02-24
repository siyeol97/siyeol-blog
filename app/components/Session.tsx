import Link from 'next/link';
import LoginButton from './LoginButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LogoutButton from './LogoutButton';

export default async function Session() {
  const session = await getServerSession(authOptions);
  const userData = {
    user: session?.user?.name,
    email: session?.user?.email,
    image: session?.user?.image,
  };
  return (
    <div>
      {session ? (
        <>
          <span>{userData.user}</span>
          <span>{userData.email}</span>
          <Link href={'/write'}>새 글 쓰기</Link>
          <LogoutButton />
        </>
      ) : (
        <>
          <LoginButton />
        </>
      )}
    </div>
  );
}
