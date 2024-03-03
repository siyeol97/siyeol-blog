import Link from 'next/link';
import styles from './Header.module.css';
import Session from './Session';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href={'/'}>
          <span className={styles.span}>Siyeol&apos;s Blog</span>
        </Link>
        <Session />
      </div>
    </header>
  );
}
