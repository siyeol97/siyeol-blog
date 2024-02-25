import Button from '@/components/Button';
import React from 'react';

export default function WriteReply() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>댓글 쓰기</span>
      <form>
        <input
          type='text'
          name='reply'
        />
        <Button>댓글 등록</Button>
      </form>
    </div>
  );
}
