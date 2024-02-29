import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useHandleReply = ({
  post_id,
  item,
  updateEditingReply,
  selectedReply,
  handleReply,
}: {
  post_id: string;
  item: Reply;
  updateEditingReply: (_id: string) => void;
  selectedReply: string;
  handleReply: (reply: Reply[]) => void;
}) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [replyValue, setReplyValue] = useState(item.comment);

  useEffect(() => {
    if (selectedReply !== item._id) {
      setIsEditing(false);
    }
  }, [selectedReply]);

  const handleClick = (type: string) => {
    setIsEditing((prev) => !prev);
    if (type === 'edit') {
      updateEditingReply(item._id);
    } else {
      updateEditingReply('');
    }
  };

  const handleRequest = async (type: string) => {
    let req = {};
    if (type === 'delete') {
      req = {
        method: 'DELETE',
        body: item._id,
      };
    } else {
      req = {
        method: 'POST',
        body: JSON.stringify({ reply_id: item._id, comment: replyValue }),
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
