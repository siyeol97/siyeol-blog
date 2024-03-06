'use client';

import { useState } from 'react';
import Preview from './Preview';
import styles from './Write.module.css';
import WriteForm from './WriteForm';

export default function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const updateTitle = (title: string) => {
    setTitle(title);
  };
  const updateContent = (content: string) => {
    setContent(content);
  };
  return (
    <section className={styles.section}>
      <WriteForm
        title={title}
        updateTitle={updateTitle}
        content={content}
        updateContent={updateContent}
        type='new'
      />
      <Preview
        title={title}
        content={content}
      />
    </section>
  );
}
