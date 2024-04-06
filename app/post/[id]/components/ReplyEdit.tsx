'use client';

import { Reply } from '@/app/type';
import styles from '../css/ReplyEdit.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import editReply, { EditedReply } from '@/utils/editReply';
import { MouseEvent } from 'react';

interface Props {
  reply: Reply;
  editedReplyValue: string;
  setEditedReplyValue: (value: string) => void;
  handleClick: (type: string) => void;
  setIsEditing: (state: boolean) => void;
}

export default function ReplyEdit({
  reply,
  editedReplyValue,
  setEditedReplyValue,
  handleClick,
  setIsEditing,
}: Props) {
  const queryClient = useQueryClient();

  const uploadReplyMutation = useMutation({
    mutationFn: (editedReply: EditedReply) => editReply(editedReply),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reply-list'] });
    },
  });

  const handleEditSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const editedReply: EditedReply = {
      reply_id: reply._id.toString(),
      comment: editedReplyValue,
    };
    uploadReplyMutation.mutate(editedReply, {
      onSuccess: () => setIsEditing(false),
    });
  };

  return (
    <div className={styles.reply_edit_area}>
      <textarea
        value={editedReplyValue}
        placeholder='댓글을 입력해 주세요'
        className={styles.reply_edit_input}
        autoFocus
        onChange={(e) => {
          setEditedReplyValue(e.target.value);
        }}
      />
      <div className={styles.button_area}>
        <button
          onClick={() => {
            handleClick('cancel');
            setEditedReplyValue(reply.comment);
          }}
          className={styles.cancel_button}
        >
          취소
        </button>
        <button
          onClick={handleEditSubmit}
          className={styles.edit_button}
        >
          확인
        </button>
      </div>
    </div>
  );
}
