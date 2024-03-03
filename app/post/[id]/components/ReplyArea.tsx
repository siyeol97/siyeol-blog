'use client';

import ReplyList from './ReplyList';
import useReply from '@/hook/useReply';
import ReplyWrite from './ReplyWrite';
import { Session } from 'next-auth';
import styles from '../css/ReplyArea.module.css';

export default function ReplyArea({
  post_id,
  session,
}: {
  post_id: string;
  session: Session | null;
}) {
  const [replyData, setReplyData] = useReply(post_id);
  const handleReply = (reply: Reply[]) => {
    setReplyData(reply);
  };
  return (
    <div className={styles.wrapper}>
      <ReplyWrite
        replyData={replyData}
        post_id={post_id}
        handleReply={handleReply}
      />
      <ReplyList
        post_id={post_id}
        replyData={replyData}
        session={session}
        handleReply={handleReply}
      />
    </div>
  );
}
