import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import styles from './css/page.module.css';
import Write from './components/Write';

export default async function WritePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }
  return (
    <div className={styles.wrapper}>
      <Write />
    </div>
  );
}
