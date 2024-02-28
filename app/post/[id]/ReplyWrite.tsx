'use client';

import { useState } from 'react';

interface Props {
  post_id: string;
  handleReply: (reply: Reply[]) => void;
}

export default function ReplyWrite({ post_id, handleReply }: Props) {
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
      handleReply(replyList);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>댓글 쓰기</span>
      <div>
        <input
          type='text'
          name='reply'
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button onClick={writeReply}>댓글 등록</button>
      </div>
    </div>
  );
}
