'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Props {
  post_id: string;
  item: Reply;
  CurrentUserData: UserData | null;
  updateEditingReply: (_id: string) => void;
  selectedReply: string;
  handleReply: (reply: Reply[]) => void;
}

export default function Reply({
  post_id,
  item,
  CurrentUserData,
  updateEditingReply,
  selectedReply,
  handleReply,
}: Props) {
  const isAuthor = item.author === CurrentUserData?.email;
  const [isEditing, setIsEditing] = useState(false);
  const [replyValue, setReplyValue] = useState(item.comment);
  const router = useRouter();

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

  const handleEditRequest = async () => {
    const response = await fetch('/api/reply/edit', {
      method: 'POST',
      body: JSON.stringify({ reply_id: item._id, comment: replyValue }),
    });
    if (response.ok) {
      const response = await fetch('/api/reply/pid', {
        method: 'POST',
        body: post_id,
      });
      const replyList: Reply[] = await response.json();
      setIsEditing(false);
      handleReply(replyList);
      router.refresh();
    }
  };

  const handleDeleteRequest = async () => {
    const response = await fetch('/api/reply/delete', {
      method: 'DELETE',
      body: item._id,
    });
    if (response.ok) {
      const response = await fetch('/api/reply/pid', {
        method: 'POST',
        body: post_id,
      });
      const replyList: Reply[] = await response.json();
      handleReply(replyList);
      router.refresh();
    }
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
          <button onClick={handleEditRequest}>확인</button>
          <button onClick={handleCancelClick}>취소</button>
        </div>
      ) : (
        <p>{item.comment}</p>
      )}
      {isAuthor && !isEditing ? (
        <div>
          <button onClick={handleEditClick}>수정</button>
          <button onClick={handleDeleteRequest}>삭제</button>
        </div>
      ) : null}
    </div>
  );
}
