'use client';

import { useState } from 'react';
import styles from './Edit.module.css';
import WriteForm from '@/app/write/WriteForm';
import Preview from '@/app/write/Preview';

interface Props {
  post: {
    title: string;
    content: string;
  };
  _id: string;
}

export default function Edit({ post, _id }: Props) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
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
        type='edit'
        _id={_id}
      />
      <Preview
        title={title}
        content={content}
      />
    </section>
  );
}
