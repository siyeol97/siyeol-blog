'use client';

import { useEffect, useState } from 'react';

export default function Reply({
  item,
  CurrentUserData,
  updateEditingReply,
  selectedReply,
}: {
  item: Reply;
  CurrentUserData: UserData | null;
  updateEditingReply: (_id: string) => void;
  selectedReply: string;
}) {
  const isAuthor = item.author === CurrentUserData?.email;
  const [isEditing, setIsEditing] = useState(false);
  const [replyValue, setReplyValue] = useState(item.comment);

  useEffect(() => {
    if (selectedReply !== item._id) {
      setIsEditing(false);
    }
  }, [selectedReply]);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
    updateEditingReply(item._id);
  };

  const handleCancelClick = () => {
    setIsEditing((prev) => !prev);
    updateEditingReply('');
  };
  return (
    <div style={{ display: 'flex' }}>
      {isEditing ? (
        <div>
          <input
            value={replyValue}
            placeholder='editing'
            onChange={(e) => {
              setReplyValue(e.target.value);
            }}
          />
          <button>확인</button>
          <button onClick={handleCancelClick}>취소</button>
        </div>
      ) : (
        <p>{item.comment}</p>
      )}
      {isAuthor && !isEditing ? (
        <div>
          <button onClick={handleEditClick}>수정</button>
          <button>삭제</button>
        </div>
      ) : null}
    </div>
  );
}
