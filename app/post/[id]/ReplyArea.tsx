'use client';

import ReplyList from './ReplyList';
import useReply from '@/hook/useReply';
import ReplyWrite from './ReplyWrite';

export default function ReplyArea({
  _id,
  CurrentUserData,
}: {
  _id: string;
  CurrentUserData: UserData | null;
}) {
  const [replyData, setReplyData] = useReply(_id);
  const handleWriteReply = (data: Reply[]) => {
    setReplyData(data);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ReplyWrite
        _id={_id}
        handleWriteReply={handleWriteReply}
      />
      <ReplyList
        replyData={replyData}
        CurrentUserData={CurrentUserData}
      />
    </div>
  );
}
