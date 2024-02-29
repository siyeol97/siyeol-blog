'use client';

import useHandleReply from '@/hook/useHandleReply';

export interface ReplyProps {
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
}: ReplyProps) {
  const isAuthor = item.author === CurrentUserData?.email;

  const { replyValue, isEditing, setReplyValue, handleClick, handleRequest } =
    useHandleReply({
      post_id,
      item,
      updateEditingReply,
      selectedReply,
      handleReply,
    });

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
          <button onClick={() => handleRequest('edit')}>확인</button>
          <button onClick={() => handleClick('cancel')}>취소</button>
        </div>
      ) : (
        <p>{item.comment}</p>
      )}
      {isAuthor && !isEditing ? (
        <div>
          <button onClick={() => handleClick('edit')}>수정</button>
          <button onClick={() => handleRequest('delete')}>삭제</button>
        </div>
      ) : null}
    </div>
  );
}
