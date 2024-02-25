'use client';

import Button from '@/components/Button';
import { useState } from 'react';

interface Props {
  _id: string;
  handleWriteReply: (data: Reply[]) => void;
}

export default function WriteReply({ _id, handleWriteReply }: Props) {
  const [comment, setComment] = useState('');

  const writeReply = async () => {
    const response = await fetch('/api/reply/new', {
      method: 'POST',
      body: JSON.stringify({ comment: comment, _id: _id }),
    });
    if (response.ok) {
      setComment('');
      // 댓글 영역 재렌더링
      const response = await fetch('/api/reply/pid', {
        method: 'POST',
        body: _id,
      });
      const result: Reply[] = await response.json();
      handleWriteReply(result);
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
        <Button onClick={writeReply}>댓글 등록</Button>
      </div>
    </div>
  );
}
