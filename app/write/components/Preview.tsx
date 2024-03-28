import MarkdownView from '@/components/Markdown/MarkdownView';
import { useEffect, useRef } from 'react';
import styles from '../css/Preview.module.css';

interface Props {
  title: string;
  content: string;
}

export default function Preview({ title, content }: Props) {
  const scrollTitleRef = useRef<HTMLTextAreaElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollTitleBottom();
  }, [title]);

  useEffect(() => {
    scrollContentBottom();
  }, [content]);

  const scrollTitleBottom = () => {
    if (scrollTitleRef.current) {
      scrollTitleRef.current.scrollTop = scrollTitleRef.current.scrollHeight;
    }
  };
  const scrollContentBottom = () => {
    if (scrollContentRef.current) {
      scrollContentRef.current.scrollTop =
        scrollContentRef.current.scrollHeight;
    }
  };

  return (
    <section className={styles.section}>
      <textarea
        className={styles.preview_title}
        value={title}
        readOnly
        ref={scrollTitleRef}
      />

      <div
        className={styles.preview_content}
        ref={scrollContentRef}
      >
        <MarkdownView content={content} />
      </div>
    </section>
  );
}
