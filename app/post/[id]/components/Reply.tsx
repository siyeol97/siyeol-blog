'use client';

import useHandleReply from '@/hook/useHandleReply';
import { Session } from 'next-auth';
import styles from '../css/Reply.module.css';
import ReplyAuthor from './ReplyAuthor';
import Comment from './Comment';
import ReplyEdit from './ReplyEdit';

export interface ReplyProps {
  post_id: string;
  item: Reply;
  session: Session | null;
  updateEditingReply: (_id: string) => void;
  selectedReply: string;
  handleReply: (reply: Reply[]) => void;
}

export default function Reply({
  post_id,
  item,
  session,
  updateEditingReply,
  selectedReply,
  handleReply,
}: ReplyProps) {
  const isAuthor = item.author === session?.user?.email;

  const { replyValue, isEditing, setReplyValue, handleClick, handleRequest } =
    useHandleReply({
      post_id,
      item,
      updateEditingReply,
      selectedReply,
      handleReply,
    });

  return (
    <div className={styles.wrapper}>
      <ReplyAuthor item={item} />
      {isEditing ? (
        <ReplyEdit
          item={item}
          replyValue={replyValue}
          setReplyValue={setReplyValue}
          handleClick={handleClick}
          handleRequest={handleRequest}
        />
      ) : (
        <Comment
          item={item}
          isAuthor={isAuthor}
          isEditing={isEditing}
          handleClick={handleClick}
          handleRequest={handleRequest}
        />
      )}
    </div>
  );
}
