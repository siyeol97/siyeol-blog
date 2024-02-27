'use client';

import ReplyList from './ReplyList';
import WriteReply from './WriteReply';
import useReply from '@/hook/useReply';

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
      <WriteReply
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
