import Link from 'next/link';
import Credential from './Credential';
import OAuth from './OAuth';
import styles from './SignIn.module.css';

export default function SignIn() {
  return (
    <main className={styles.wrapper}>
      <h2>
        <Link href={'/'}>Siyeol&apos;s Blog</Link>
      </h2>
      <Credential />
      <OAuth />
      <p>
        아직 회원이 아니세요?
        <Link href={'/register'}>회원가입 하러가기</Link>
      </p>
    </main>
  );
}
