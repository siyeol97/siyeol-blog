import styles from './Header.module.css';
import Session from './Session';
import MainLogo from './MainLogo';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <MainLogo />
        <Session />
      </div>
    </header>
  );
}
