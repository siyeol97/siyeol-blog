import Link from 'next/link';
import styles from './Register.module.css';

export default function Register() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2>
          <Link href={'/'}>Siyeol&apos;s Blog</Link>
        </h2>
        <form
          method='POST'
          action='/api/auth/signup'
          className={styles.form}
        >
          <input
            name='name'
            type='text'
            placeholder='Name *'
            required
            autoFocus
          />
          <input
            name='email'
            type='email'
            placeholder='Email *'
            required
          />
          <input
            name='password'
            type='password'
            placeholder='Password *'
            required
          />
          <button>회원가입 하기</button>
        </form>
        <p>
          이미 회원이세요? <Link href={'/auth/signin'}> 로그인</Link>
        </p>
      </div>
    </section>
  );
}
