'use client';

import { ChangeEvent, useState } from 'react';
import styles from '../css/ReplyWrite.module.css';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';

interface Props {
  replyData: Reply[];
  post_id: string;
  handleReply: (reply: Reply[]) => void;
  session: Session | null;
}

export default function ReplyWrite({
  replyData,
  post_id,
  handleReply,
  session,
}: Props) {
  const router = useRouter();
  const replyCount = replyData.length;
  const [comment, setComment] = useState('');

  const onChangeReply = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length >= 1000) {
      return;
    }
    setComment(e.target.value);
  };

  const writeReply = async () => {
    if (!session) {
      router.push('/auth/signin');
    }
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
          onChange={onChangeReply}
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
