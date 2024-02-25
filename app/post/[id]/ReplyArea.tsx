'use client';

import ReplyComment from './ReplyComment';
import WriteReply from './WriteReply';
import useReply from '@/hook/useReply';

export default function ReplyArea({ _id }: { _id: string }) {
  const [replyData, setReplyData] = useReply(_id);
  const handleWriteReply = (data: Reply[]) => {
    setReplyData(data);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <WriteReply
        _id={_id}
        handleWriteReply={handleWriteReply}
      />
      <ReplyComment replyData={replyData} />
    </div>
  );
}
