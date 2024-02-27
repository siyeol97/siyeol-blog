'use client';

import ReplyList from './ReplyList';
import useReply from '@/hook/useReply';
import ReplyWrite from './ReplyWrite';

export default function ReplyArea({
  post_id,
  CurrentUserData,
}: {
  post_id: string;
  CurrentUserData: UserData | null;
}) {
  const [replyData, setReplyData] = useReply(post_id);
  const handleReply = (reply: Reply[]) => {
    setReplyData(reply);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ReplyWrite
        post_id={post_id}
        handleReply={handleReply}
      />
      <ReplyList
        post_id={post_id}
        replyData={replyData}
        CurrentUserData={CurrentUserData}
        handleReply={handleReply}
      />
    </div>
  );
}
