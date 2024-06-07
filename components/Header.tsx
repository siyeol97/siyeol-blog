'use client';

import styles from './Header.module.css';
import UserSession from './UserSession';
import MainLogo from './MainLogo';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver((element) => {
      element.forEach((landing) => {
        if (landing.isIntersecting) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      });
    });

    const target = document.querySelector('#landing');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
      observer.disconnect();
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
