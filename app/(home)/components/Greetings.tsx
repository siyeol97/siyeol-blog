'use client';

import { useEffect, useState } from 'react';
import styles from '../css/Greetings.module.css';
import Image from 'next/image';

interface Props {
  isAnimationFinished: boolean;
}

export default function Greetings({ isAnimationFinished }: Props) {
  const greetings = [
    'Hello World!\n',
    <span
      key='jsx-1'
      className={styles.terminal}
    >
      ~/Desktop/siyeol-blog
    </span>,
    '  npm run dev\n\n',
    '> siyeol dev-log@0.1.0 dev\n> next dev\n\n',
    '\t▲ Next.js 14.1.0\n\t- Local:\thttp://localhost:3000\n\t- Environments: .env.local\n\n',
    '✓ Ready in 2.7s',
  ];

  const [textElements, setTextElements] = useState<JSX.Element[]>([]);
  const [textIndex, setTextIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isButtonShow, setIsButtonShow] = useState(false);

  useEffect(() => {
    if (!isAnimationFinished || textIndex >= greetings.length) {
      return;
    }
    const setTerminal = setInterval(() => {
      const currentElement = greetings[textIndex];

      if (typeof currentElement === 'string' && textIndex === 2) {
        if (charIndex < currentElement.length) {
          setTextElements((prev) => [
            ...prev,
            <span key={`${textIndex}-${charIndex}`}>
              {currentElement[charIndex]}
            </span>,
          ]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTextIndex((prev) => prev + 1);
          setCharIndex(0);
        }
      } else {
        setTextElements((prev) => [
          ...prev,
          <span key={`${textIndex}`}>{currentElement}</span>,
        ]);
        setTextIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, 100);

    return () => {
      clearInterval(setTerminal);
      if (textIndex >= greetings.length - 1) {
        setIsButtonShow(true);
      }
    };
  }, [isAnimationFinished, textIndex, charIndex, greetings]);

  return (
    isAnimationFinished && (
      <section className={styles.wrapper}>
        <div className={styles.container}>{textElements}</div>
        {isButtonShow && (
          <button className={styles.down_button}>
            <Image
              src={'/arrow.svg'}
              alt='arrow-image'
              width={32}
              height={32}
              className={styles.arrow_image}
            />
          </button>
        )}
      </section>
    )
  );
}
