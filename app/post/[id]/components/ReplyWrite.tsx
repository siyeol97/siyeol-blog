'use client';

import { useState } from 'react';
import styles from '../css/ReplyWrite.module.css';

interface Props {
  replyData: Reply[];
  post_id: string;
  handleReply: (reply: Reply[]) => void;
}

export default function ReplyWrite({ replyData, post_id, handleReply }: Props) {
  const replyCount = replyData.length;
  const [comment, setComment] = useState('');

  const writeReply = async () => {
    const response = await fetch('/api/reply/new', {
      method: 'POST',
      body: JSON.stringify({ comment: comment, post_id: post_id }),
    });
    if (response.ok) {
      setComment('');
      // 댓글 영역 재렌더링
      const response = await fetch('/api/reply/pid', {
        method: 'POST',
        body: post_id,
      });
      const replyList: Reply[] = await response.json();
      const result = replyList.reverse();
      handleReply(result);
    }
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.reply_count}>댓글 {replyCount}개</span>
      <div className={styles.reply_input_area}>
        <textarea
          name='reply'
          value={comment}
          className={styles.reply_input}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button
          onClick={writeReply}
          className={styles.button}
        >
          댓글 등록
        </button>
      </div>
    </div>
  );
}
