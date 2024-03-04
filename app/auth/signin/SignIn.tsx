import Link from 'next/link';
import Credential from './Credential';
import OAuth from './OAuth';
import styles from './SignIn.module.css';
import MainLogo from '@/components/MainLogo';

export default function SignIn() {
  return (
    <main className={styles.wrapper}>
      <MainLogo />
      <Credential />
      <OAuth />
      <p className={styles.go_register}>
        아직 회원이 아니세요?
        <Link href={'/register'}>회원가입</Link>
      </p>
    </main>
  );
}
