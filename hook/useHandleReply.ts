import { Reply } from '@/app/type';
import { useEffect, useState } from 'react';

const useHandleReply = ({
  reply,
  updateEditingReply,
  selectedReply,
}: {
  post_id: string;
  reply: Reply;
  updateEditingReply: (_id: string) => void;
  selectedReply: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedReplyValue, setEditedReplyValue] = useState(reply.comment);

  useEffect(() => {
    if (selectedReply !== reply._id.toString()) {
      setIsEditing(false);
    }
  }, [selectedReply]);

  const handleClick = (type: string) => {
    setIsEditing((prev) => !prev);
    if (type === 'edit') {
      updateEditingReply(reply._id.toString());
    } else {
      updateEditingReply('');
    }
  };

  return {
    editedReplyValue,
    isEditing,
    setEditedReplyValue,
    handleClick,
    setIsEditing,
  };
};

export default useHandleReply;
