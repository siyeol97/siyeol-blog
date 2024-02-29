import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Write from './Write';

export default async function WritePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }
  return <Write />;
}
