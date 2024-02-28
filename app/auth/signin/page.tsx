import { getServerSession } from 'next-auth';
import SignIn from './SignIn';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/');
  }
  return <SignIn />;
}
