import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <span className={styles.span}>Siyeol&apos;s blog</span>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={'/write'}>새 글 쓰기</Link>
            <button>로그인</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
