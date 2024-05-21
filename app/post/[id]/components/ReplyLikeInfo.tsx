'use client';

import Image from 'next/image';
import styles from '../css/ReplyLikeInfo.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MouseEvent } from 'react';
import likePost, { LikePost } from '@/utils/likePost';
import { Session } from 'next-auth';
import { LikeCountCheck } from '../type';
import unlikePost from '@/utils/unlikePost';

interface Props {
  replyCount: number | undefined;
  post_id: string;
  session: Session | null;
  likeCountCheck: LikeCountCheck | undefined;
}

export default function ReplyLikeInfo({
  replyCount,
  post_id,
  session,
  likeCountCheck,
}: Props) {
  const queryClient = useQueryClient();

  const likePostMutation = useMutation({
    mutationFn: async (likeReq: LikePost) => {
      if (likeReq.userAction === 'like') {
        await likePost(likeReq);
      } else {
        await unlikePost(likeReq);
      }
    },
    onMutate: async (likeReq: LikePost) => {
      await queryClient.cancelQueries({ queryKey: ['like-count-check'] });

      const prevStatus = queryClient.getQueryData([
        'like-count-check',
        post_id,
      ]);

      queryClient.setQueryData(
        ['like-count-check', post_id],
        (prev: LikeCountCheck) => {
          const newCount =
            likeReq.userAction === 'like' ? prev.count + 1 : prev.count - 1;
          const newIsLiked = likeReq.userAction === 'like';
          return { ...prev, count: newCount, isLiked: newIsLiked };
        }
      );

      return prevStatus;
    },
    onError: (err, likeReq, context) => {
      queryClient.setQueryData(['like-count-check', post_id], context);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['like-count-check', post_id],
      });
    },
  });

  const handleLikeClick = (
    e: MouseEvent<HTMLImageElement>,
    userAction: 'like' | 'unlike'
  ) => {
    e.preventDefault();
    if (likePostMutation.isPending) {
      return;
    }
    if (!session || !session.user?.email) {
      alert('로그인필요');
      return;
    }
    const likeReq: LikePost = {
      user_email: session.user.email,
      post_id: post_id,
      userAction,
    };
    likePostMutation.mutate(likeReq);
  };

  return (
    <div className={styles.reply_like_info}>
      <div className={styles.count}>
        <Image
          src={'/reply-icon.svg'}
          alt='reply-icon'
          width={22}
          height={22}
        />
        <span className={styles.reply_like_count}>{replyCount}</span>
      </div>
      <div className={styles.count}>
        <Image
          src={
            likeCountCheck?.isLiked
              ? '/active-heart.svg'
              : '/inactive-heart.svg'
          }
          alt='like-icon'
          width={24}
          height={24}
          onClick={
            likeCountCheck?.isLiked
              ? (e) => handleLikeClick(e, 'unlike')
              : (e) => handleLikeClick(e, 'like')
          }
          className={styles.like_icon}
        />
        <span className={styles.reply_like_count}>{likeCountCheck?.count}</span>
      </div>
    </div>
  );
}
