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
  type: string;
  _id?: string;
}

export default function WriteForm({
  title,
  updateTitle,
  content,
  updateContent,
  type,
  _id,
}: Props) {
  const router = useRouter();
  const handleCancelClick = () => {
    router.back();
  };

  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateTitle(e.target.value);
  };

  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateContent(e.target.value);
  };

  return (
    <form
      action={type === 'new' ? '/api/post/new' : '/api/post/edit'}
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
        maxLength={40}
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
          maxLength={3000}
          maxRows={26}
          required
          value={content}
          onChange={onChangeContent}
        />
      </label>
      {type === 'edit' ? (
        <input
          type='text'
          name='_id'
          defaultValue={_id}
          className={styles.hide_id}
        />
      ) : null}
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
