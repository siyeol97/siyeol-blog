'use client';

import { useRef } from 'react';
import styles from '../css/Landing.module.css';
import CodeAnimation from './CodeAnimation';
import useScreenSize from '@/hook/useScreenSize';

export default function Landing() {
  const sectionRef = useRef<HTMLElement>(null);
  const screenSize = useScreenSize(sectionRef);

  return (
    <section
      className={styles.wrapper}
      ref={sectionRef}
    >
      <CodeAnimation
        canvasWidth={screenSize.width}
        canvasHeight={screenSize.height - 380}
        isSmallScreen={screenSize.isSmallScreen}
      />
    </section>
  );
}
