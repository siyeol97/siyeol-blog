'use client';

import { useState } from 'react';
import Preview from './Preview';
import styles from '../css/Write.module.css';
import WriteForm from './WriteForm';

export default function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const updateTitle = (title: string) => {
    setTitle(title);
  };
  const updateContent = (content: string) => {
    setContent(content);
  };
  const updateTags = (newTag: string) => {
    // 공백문자 제거, 중복 제거, 빈 문자열 제거 후 태그 업데이트
    setTags(
      Array.from(
        new Set(
          newTag
            .trim()
            .split(' ')
            .filter((tag) => tag !== '')
        )
      )
    );
  };

  return (
    <section className={styles.section}>
      <WriteForm
        title={title}
        updateTitle={updateTitle}
        content={content}
        updateContent={updateContent}
        updateTags={updateTags}
        type='new'
        tags={tags}
      />
      <Preview
        title={title}
        content={content}
        tags={tags}
      />
    </section>
  );
}
