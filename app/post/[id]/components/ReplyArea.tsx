'use client';

import ReplyList from './ReplyList';
import ReplyWrite from './ReplyWrite';
import { Session } from 'next-auth';
import styles from '../css/ReplyArea.module.css';
import { Reply } from '@/app/type';
import { useQuery } from '@tanstack/react-query';
import getReplyList from '@/utils/getReplyList';
import ReplyLoading from './ReplyLoading';
import getPostLikeCount, { GetLikeInfoProp } from '@/utils/getLikeCount';
import { LikeCountCheck } from '../type';

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

  const getLikeInfoProp: GetLikeInfoProp = {
    user_email: session?.user?.email,
    post_id: post_id,
  };

  const { data: likeCountCheck } = useQuery<LikeCountCheck>({
    queryKey: ['like-count-check', post_id],
    queryFn: () => getPostLikeCount(getLikeInfoProp),
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
            likeCountCheck={likeCountCheck}
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
