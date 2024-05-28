'use client';

import styles from './Header.module.css';
import UserSession from './UserSession';
import MainLogo from './MainLogo';
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      return;
    }
    const handleScroll = debounce(() => {
      if (window.scrollY < window.innerHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }, 10);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.wrapper}>
        <MainLogo />
        <UserSession />
      </div>
    </header>
  );
}
