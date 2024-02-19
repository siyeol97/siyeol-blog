import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.span}>Siyeol&apos;s blog</span>
      <nav>
        <ul>
          <li>
            <button>로그인</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
