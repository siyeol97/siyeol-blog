'use client';

import { useEffect, useState } from 'react';
import ReplyComment from './ReplyComment';
import WriteReply from './WriteReply';

export default function ReplyArea({ _id }: { _id: string }) {
  const [replyData, setReplyData] = useState([]);
  useEffect(() => {
    const getReplyData = async () => {
      const response = await fetch('/api/reply/pid', {
        method: 'POST',
        body: _id,
      });
      const result = await response.json();
      setReplyData(result);
    };
    getReplyData();
  }, [_id]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <WriteReply _id={_id} />
      <ReplyComment replyData={replyData} />
    </div>
  );
}
