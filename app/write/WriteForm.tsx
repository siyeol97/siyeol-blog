'use client';

import ReactTextareaAutosize from 'react-textarea-autosize';
import styles from './WriteForm.module.css';

export default function WriteForm() {
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
          maxRows={27}
        />
      </label>
      <div className={styles.button_area}>
        <button className={styles.cancel_button}>취소</button>
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
