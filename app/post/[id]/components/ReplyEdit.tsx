'use client';

import styles from '../css/ReplyEdit.module.css';

interface Props {
  item: Reply;
  replyValue: string;
  setReplyValue: (value: string) => void;
  handleClick: (type: string) => void;
  handleRequest: (type: string) => void;
}

export default function ReplyEdit({
  item,
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
        onChange={(e) => {
          setReplyValue(e.target.value);
        }}
      />
      <div className={styles.button_area}>
        <button
          onClick={() => {
            handleClick('cancel');
            setReplyValue(item.comment);
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
