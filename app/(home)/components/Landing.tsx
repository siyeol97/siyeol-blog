'use client';

import { useRef, useState } from 'react';
import styles from '../css/Landing.module.css';
import CodeAnimation from './CodeAnimation';
import useScreenSize from '@/hook/useScreenSize';
import Greetings from './Greetings';

export default function Landing() {
  const sectionRef = useRef<HTMLElement>(null);
  const screenSize = useScreenSize(sectionRef);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  const handleAnimationFlag = (flag: boolean) => {
    setIsAnimationFinished(flag);
  };

  return (
    <section
      className={styles.wrapper}
      ref={sectionRef}
      id='landing'
    >
      <CodeAnimation
        canvasWidth={screenSize.width}
        canvasHeight={464}
        isSmallScreen={screenSize.isSmallScreen}
        handleAnimationFlag={handleAnimationFlag}
      />
      <Greetings
        isAnimationFinished={isAnimationFinished}
        sectionRef={sectionRef}
      />
    </section>
  );
}
