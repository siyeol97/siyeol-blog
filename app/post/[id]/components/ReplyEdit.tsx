'use client';

import { Reply } from '@/app/type';
import styles from '../css/ReplyEdit.module.css';

interface Props {
  reply: Reply;
  replyValue: string;
  setReplyValue: (value: string) => void;
  handleClick: (type: string) => void;
  handleRequest: (type: string) => void;
}

export default function ReplyEdit({
  reply,
  replyValue,
  setReplyValue,
  handleRequest,
  handleClick,
}: Props) {
  return (
    <div className={styles.reply_edit_area}>
      <textarea
        value={replyValue}
        placeholder='댓글을 입력해 주세요'
        className={styles.reply_edit_input}
        autoFocus
        onChange={(e) => {
          setReplyValue(e.target.value);
        }}
      />
      <div className={styles.button_area}>
        <button
          onClick={() => {
            handleClick('cancel');
            setReplyValue(reply.comment);
          }}
          className={styles.cancel_button}
        >
          취소
        </button>
        <button
          onClick={() => handleRequest('edit')}
          className={styles.edit_button}
        >
          확인
        </button>
      </div>
    </div>
  );
}
