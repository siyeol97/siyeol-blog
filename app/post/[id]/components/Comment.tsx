'use client';

import styles from '../css/Comment.module.css';

interface Props {
  reply: Reply;
  isAuthor: boolean;
  isEditing: boolean;
  handleClick: (type: string) => void;
  handleRequest: (type: string) => void;
}

export default function Comment({
  reply,
  isAuthor,
  isEditing,
  handleClick,
  handleRequest,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.comment}>{reply.comment}</p>
      {isAuthor && !isEditing ? (
        <div className={styles.button}>
          <button
            onClick={() => handleClick('edit')}
            className={styles.button_text}
          >
            수정
          </button>
          <button
            onClick={() => handleRequest('delete')}
            className={styles.button_text}
          >
            삭제
          </button>
        </div>
      ) : null}
    </div>
  );
}
