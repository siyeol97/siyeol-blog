'use client';

import ReplyList from './ReplyList';
import ReplyWrite from './ReplyWrite';
import { Session } from 'next-auth';
import styles from '../css/ReplyArea.module.css';
import { Reply } from '@/app/type';
import { useQuery } from '@tanstack/react-query';
import getReplyList from '@/utils/getReplyList';
import ReplyLoading from './ReplyLoading';
import getPostLikeCount from '@/utils/getLikeCount';

export default function ReplyArea({
  post_id,
  session,
}: {
  post_id: string;
  session: Session | null;
}) {
  const { data: replyData, isLoading } = useQuery<Reply[]>({
    queryKey: ['reply-list', post_id],
    queryFn: () => getReplyList(post_id),
    staleTime: 30 * 1000,
  });

  const { data: likeCount } = useQuery<number>({
    queryKey: ['like-count', post_id],
    queryFn: () => getPostLikeCount(post_id),
    staleTime: 10 * 1000,
  });

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <ReplyLoading />
      ) : (
        <>
          <ReplyWrite
            replyData={replyData}
            post_id={post_id}
            session={session}
            likeCount={likeCount}
          />
          <ReplyList
            post_id={post_id}
            replyData={replyData}
            session={session}
          />
        </>
      )}
    </div>
  );
}
