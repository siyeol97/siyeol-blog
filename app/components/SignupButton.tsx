import Link from 'next/link';

export default function SignupButton() {
  return (
    <button>
      <Link href={'/register'}>회원가입</Link>
    </button>
  );
}
