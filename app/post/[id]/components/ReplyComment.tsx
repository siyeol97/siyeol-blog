'use client';

import useHandleReply from '@/hook/useHandleReply';
import { Session } from 'next-auth';
import styles from '../css/Reply.module.css';
import ReplyAuthor from './ReplyAuthor';
import Comment from './Comment';
import ReplyEdit from './ReplyEdit';
import { Reply } from '@/app/type';

export interface ReplyProps {
  post_id: string;
  reply: Reply;
  session: Session | null;
  updateEditingReply: (_id: string) => void;
  selectedReply: string;
}

export default function ReplyComment({
  post_id,
  reply,
  session,
  updateEditingReply,
  selectedReply,
}: ReplyProps) {
  const isAuthor = reply.author === session?.user?.email;

  const {
    editedReplyValue,
    isEditing,
    setEditedReplyValue,
    handleClick,
    setIsEditing,
  } = useHandleReply({
    post_id,
    reply,
    updateEditingReply,
    selectedReply,
  });

  return (
    <div className={styles.wrapper}>
      <ReplyAuthor reply={reply} />
      {isEditing ? (
        <ReplyEdit
          reply={reply}
          editedReplyValue={editedReplyValue}
          setEditedReplyValue={setEditedReplyValue}
          handleClick={handleClick}
          setIsEditing={setIsEditing}
        />
      ) : (
        <Comment
          reply={reply}
          isAuthor={isAuthor}
          isEditing={isEditing}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}
