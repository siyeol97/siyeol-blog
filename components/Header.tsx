import styles from './Header.module.css';
import UserSession from './UserSession';
import MainLogo from './MainLogo';

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.wrapper}>
        <MainLogo />
        <UserSession />
      </div>
    </header>
  );
}
