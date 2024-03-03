import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useHandleReply = ({
  post_id,
  reply,
  updateEditingReply,
  selectedReply,
  handleReply,
}: {
  post_id: string;
  reply: Reply;
  updateEditingReply: (_id: string) => void;
  selectedReply: string;
  handleReply: (reply: Reply[]) => void;
}) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [replyValue, setReplyValue] = useState(reply.comment);

  useEffect(() => {
    if (selectedReply !== reply._id) {
      setIsEditing(false);
    }
  }, [selectedReply]);

  const handleClick = (type: string) => {
    setIsEditing((prev) => !prev);
    if (type === 'edit') {
      updateEditingReply(reply._id);
    } else {
      updateEditingReply('');
    }
  };

  const handleRequest = async (type: string) => {
    let req = {};
    if (type === 'delete') {
      req = {
        method: 'DELETE',
        body: reply._id,
      };
    } else {
      req = {
        method: 'POST',
        body: JSON.stringify({ reply_id: reply._id, comment: replyValue }),
      };
    }
    const response = await fetch(`/api/reply/${type}`, req);
    if (response.ok) {
      const response = await fetch('/api/reply/pid', {
        method: 'POST',
        body: post_id,
      });
      const replyList: Reply[] = await response.json();
      if (type === 'edit') {
        setIsEditing(false);
      }
      handleReply(replyList);
      router.refresh();
    }
    return null;
  };

  return { replyValue, isEditing, setReplyValue, handleClick, handleRequest };
};

export default useHandleReply;
