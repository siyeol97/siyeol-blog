'use client';

import Image from 'next/image';
import styles from '../css/ReplyLikeInfo.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MouseEvent } from 'react';
import likePost, { LikePost } from '@/utils/likePost';
import { Session } from 'next-auth';

interface Props {
  replyCount: number | undefined;
  post_id: string;
  session: Session | null;
  likeCount: number | undefined;
}

export default function ReplyLikeInfo({
  replyCount,
  post_id,
  session,
  likeCount,
}: Props) {
  const queryClient = useQueryClient();

  const likePostMutation = useMutation({
    mutationFn: (likeReq: LikePost) => likePost(likeReq),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['like-count'] });
    },
  });

  const handleLikeClick = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    if (!session || !session.user?.email) {
      alert('로그인필요');
      return;
    }
    const likeReq: LikePost = {
      user_email: session.user.email,
      post_id: post_id,
    };
    likePostMutation.mutate(likeReq, {
      onSuccess: () => console.log('좋아요 성공'),
    });
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
          src={'/inactive-heart.svg'}
          alt='like-icon'
          width={24}
          height={24}
          onClick={handleLikeClick}
          className={styles.like_icon}
        />
        <span className={styles.reply_like_count}>{likeCount}</span>
      </div>
    </div>
  );
}
