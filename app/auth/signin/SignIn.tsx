import Link from 'next/link';
import Credential from './Credential';
import OAuth from './OAuth';

export default function SignIn() {
  return (
    <main>
      <Credential />
      <OAuth />
      <Link href={'/register'}>회원가입 하러가기</Link>
    </main>
  );
}
