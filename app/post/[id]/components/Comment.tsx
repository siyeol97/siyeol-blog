'use client';

import { Reply } from '@/app/type';
import styles from '../css/Comment.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import deleteReply from '@/utils/deleteReply';
import { MouseEvent } from 'react';

interface Props {
  reply: Reply;
  isAuthor: boolean;
  isEditing: boolean;
  handleClick: (type: string) => void;
}

export default function Comment({
  reply,
  isAuthor,
  isEditing,
  handleClick,
}: Props) {
  const queryClient = useQueryClient();

  const uploadReplyMutation = useMutation({
    mutationFn: (reply_id: string) => deleteReply(reply_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reply-list'] });
    },
  });

  const handleDeleteSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const reply_id = reply._id.toString();
    uploadReplyMutation.mutate(reply_id, {
      onSuccess: () => console.log('댓글 삭제 성공'),
    });
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.comment}>{reply.comment}</p>
      {isAuthor && !isEditing ? (
        <div className={styles.button}>
          <button
            onClick={() => handleClick('edit')}
            className={styles.button_text}
          >
            수정
          </button>
          <button
            onClick={handleDeleteSubmit}
            className={styles.button_text}
          >
            삭제
          </button>
        </div>
      ) : null}
    </div>
  );
}
