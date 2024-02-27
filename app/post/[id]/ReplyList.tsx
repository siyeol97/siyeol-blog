import { useState } from 'react';
import Reply from './Reply';

export default function ReplyList({
  replyData,
  CurrentUserData,
}: {
  replyData: Reply[];
  CurrentUserData: UserData | null;
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
            key={item._id}
            item={item}
            CurrentUserData={CurrentUserData}
            updateEditingReply={updateEditingReply}
            selectedReply={selectedReply}
          />
        );
      })}
    </div>
  );
}
