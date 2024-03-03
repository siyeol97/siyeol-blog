import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import SignInUpButton from './SignInUpButton';
import UserInfo from './UserInfo';

export default async function Session() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>{session ? <UserInfo session={session} /> : <SignInUpButton />}</div>
  );
}
