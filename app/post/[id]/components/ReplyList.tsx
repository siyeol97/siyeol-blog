import { useState } from 'react';
import Reply from './Reply';
import { Session } from 'next-auth';

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
          <Reply
            post_id={post_id}
            key={reply._id}
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
