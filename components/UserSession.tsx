import { getServerSession } from 'next-auth';
import SignInUpButton from './SignInUpButton';
import UserInfo from './UserInfo';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function UserSession() {
  const session = await getServerSession(authOptions);
  return (
    <div>{session ? <UserInfo session={session} /> : <SignInUpButton />}</div>
  );
}
