'use client';

import { useState } from 'react';
import styles from './Edit.module.css';
import WriteForm from '@/app/write/components/WriteForm';
import Preview from '@/app/write/components/Preview';

interface Props {
  post: {
    title: string;
    content: string;
    tags: string[];
  };
  _id: string;
}

export default function Edit({ post, _id }: Props) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [tags, setTags] = useState<string[]>(post.tags);

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
        tags={tags}
        updateTags={updateTags}
        type='edit'
        _id={_id}
      />
      <Preview
        title={title}
        content={content}
        tags={tags}
      />
    </section>
  );
}
