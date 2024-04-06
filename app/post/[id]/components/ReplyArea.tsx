'use client';

import ReplyList from './ReplyList';
import ReplyWrite from './ReplyWrite';
import { Session } from 'next-auth';
import styles from '../css/ReplyArea.module.css';
import { Reply } from '@/app/type';
import { useQuery } from '@tanstack/react-query';
import getReplyList from '@/utils/getReplyList';

export default function ReplyArea({
  post_id,
  session,
}: {
  post_id: string;
  session: Session | null;
}) {
  const { data: replyData } = useQuery<Reply[]>({
    queryKey: ['reply-list', post_id],
    queryFn: () => getReplyList(post_id),
    staleTime: 30 * 1000,
  });

  return (
    <div className={styles.wrapper}>
      <ReplyWrite
        replyData={replyData}
        post_id={post_id}
        session={session}
      />
      <ReplyList
        post_id={post_id}
        replyData={replyData}
        session={session}
      />
    </div>
  );
}
