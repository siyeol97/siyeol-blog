import { useState } from 'react';
import Reply from './Reply';

export default function ReplyList({
  post_id,
  replyData,
  CurrentUserData,
  handleReply,
}: {
  post_id: string;
  replyData: Reply[];
  CurrentUserData: UserData | null;
  handleReply: (reply: Reply[]) => void;
}) {
  const [selectedReply, setSelectedReply] = useState('');
  const updateEditingReply = (_id: string) => {
    setSelectedReply(_id);
  };
  return (
    <div>
      {replyData.map((item) => {
        return (
          <Reply
            post_id={post_id}
            key={item._id}
            item={item}
            CurrentUserData={CurrentUserData}
            updateEditingReply={updateEditingReply}
            selectedReply={selectedReply}
            handleReply={handleReply}
          />
        );
      })}
    </div>
  );
}
