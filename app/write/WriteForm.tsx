'use client';

import ReactTextareaAutosize from 'react-textarea-autosize';
import styles from './WriteForm.module.css';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';

interface Props {
  title: string;
  updateTitle: (title: string) => void;
  content: string;
  updateContent: (content: string) => void;
}

export default function WriteForm({
  title,
  updateTitle,
  content,
  updateContent,
}: Props) {
  const router = useRouter();
  const handleCancelClick = () => {
    router.push('/');
  };

  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateTitle(e.target.value);
  };

  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateContent(e.target.value);
  };

  return (
    <form
      action='/api/post/new'
      method='POST'
      className={styles.form}
    >
      <textarea
        name='title'
        placeholder='제목을 작성해주세요'
        className={styles.input_title}
        required
        value={title}
        onChange={onChangeTitle}
      />
      <hr className={styles.separator} />
      <label
        htmlFor='content'
        className={styles.content_label}
      >
        <ReactTextareaAutosize
          id='content'
          name='content'
          placeholder='내용을 작성해주세요'
          className={styles.input_content}
          maxRows={26}
          required
          value={content}
          onChange={onChangeContent}
        />
      </label>
      <div className={styles.button_area}>
        <button
          type='button'
          className={styles.cancel_button}
          onClick={handleCancelClick}
        >
          취소
        </button>
        <button
          type='submit'
          className={styles.submit_button}
        >
          저장하기
        </button>
      </div>
    </form>
  );
}
