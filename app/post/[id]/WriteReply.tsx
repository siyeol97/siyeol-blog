'use client';

import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function WriteReply({ _id }: { _id: string }) {
  const router = useRouter();
  const [comment, setComment] = useState('');

  const writeReply = async () => {
    await fetch('/api/reply/new', {
      method: 'POST',
      body: JSON.stringify({ comment: comment, _id: _id }),
    });

    router.refresh();
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
