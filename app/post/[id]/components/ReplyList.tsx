import { useState } from 'react';
import { Session } from 'next-auth';
import { Reply } from '@/app/type';
import ReplyComment from './ReplyComment';

export default function ReplyList({
  post_id,
  replyData,
  session,
  handleReply,
}: {
  post_id: string;
  replyData: Reply[];
  session: Session | null;
  handleReply: (reply: Reply[]) => void;
}) {
  const [selectedReply, setSelectedReply] = useState('');
  const updateEditingReply = (_id: string) => {
    setSelectedReply(_id);
  };
  return (
    <div>
      {replyData.map((reply) => {
        return (
          <ReplyComment
            post_id={post_id}
            key={reply._id.toString()}
            reply={reply}
            session={session}
            updateEditingReply={updateEditingReply}
            selectedReply={selectedReply}
            handleReply={handleReply}
          />
        );
      })}
    </div>
  );
}
