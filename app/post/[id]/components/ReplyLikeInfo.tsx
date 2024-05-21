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
        (prev: LikeCountCheck | undefined) => {
          if (!prev) {
            return prev;
          }
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
    e: MouseEvent<SVGSVGElement>,
    userAction: 'like' | 'unlike'
  ) => {
    e.preventDefault();
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
          width={24}
          height={24}
        />
        <span className={styles.reply_like_count}>{replyCount}</span>
      </div>
      <div className={styles.count}>
        <div className={styles.like_icon}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            onClick={
              likeCountCheck?.isLiked
                ? (e) => handleLikeClick(e, 'unlike')
                : (e) => handleLikeClick(e, 'like')
            }
          >
            <path
              d={
                likeCountCheck?.isLiked
                  ? 'M11.9904 19.708C11.7763 19.708 11.5612 19.6695 11.3452 19.5926C11.1291 19.5157 10.9391 19.3952 10.775 19.2311L9.33848 17.9253C7.56539 16.3086 5.98238 14.7205 4.58943 13.1609C3.19648 11.6013 2.5 9.93045 2.5 8.14841C2.5 6.7292 2.97852 5.54106 3.93558 4.58401C4.89263 3.62696 6.08076 3.14844 7.49998 3.14844C8.30638 3.14844 9.10285 3.33434 9.8894 3.70614C10.6759 4.07794 11.3795 4.68179 12 5.51769C12.6205 4.68179 13.324 4.07794 14.1105 3.70614C14.8971 3.33434 15.6936 3.14844 16.5 3.14844C17.9192 3.14844 19.1073 3.62696 20.0644 4.58401C21.0214 5.54106 21.5 6.7292 21.5 8.14841C21.5 9.94968 20.7916 11.6391 19.375 13.2167C17.9583 14.7942 16.3788 16.3689 14.6365 17.9407L13.2154 19.2311C13.0513 19.3952 12.8596 19.5157 12.6404 19.5926C12.4211 19.6695 12.2045 19.708 11.9904 19.708Z'
                  : 'M11.9904 19.708C11.7763 19.708 11.5612 19.6695 11.3452 19.5926C11.1291 19.5157 10.9391 19.3952 10.775 19.2311L9.33848 17.9253C7.56539 16.3086 5.98238 14.7205 4.58943 13.1609C3.19648 11.6013 2.5 9.93045 2.5 8.14841C2.5 6.7292 2.97852 5.54106 3.93558 4.58401C4.89263 3.62696 6.08076 3.14844 7.49998 3.14844C8.30638 3.14844 9.10285 3.33434 9.8894 3.70614C10.6759 4.07794 11.3795 4.68179 12 5.51769C12.6205 4.68179 13.324 4.07794 14.1105 3.70614C14.8971 3.33434 15.6936 3.14844 16.5 3.14844C17.9192 3.14844 19.1073 3.62696 20.0644 4.58401C21.0214 5.54106 21.5 6.7292 21.5 8.14841C21.5 9.94968 20.7916 11.6391 19.375 13.2167C17.9583 14.7942 16.3788 16.3689 14.6365 17.9407L13.2154 19.2311C13.0513 19.3952 12.8596 19.5157 12.6404 19.5926C12.4211 19.6695 12.2045 19.708 11.9904 19.708ZM11.2808 7.03689C10.7397 6.21252 10.1702 5.60835 9.5721 5.22439C8.97402 4.8404 8.28331 4.64841 7.49998 4.64841C6.49998 4.64841 5.66664 4.98175 4.99998 5.64841C4.33331 6.31508 3.99998 7.14841 3.99998 8.14841C3.99998 8.95098 4.25863 9.79008 4.77593 10.6657C5.29323 11.5413 5.94257 12.4118 6.72398 13.2772C7.50539 14.1426 8.35187 14.9881 9.2634 15.8138C10.1749 16.6394 11.0198 17.4067 11.798 18.1157C11.8557 18.167 11.923 18.1926 12 18.1926C12.0769 18.1926 12.1442 18.167 12.2019 18.1157C12.9801 17.4067 13.825 16.6394 14.7366 15.8138C15.6481 14.9881 16.4946 14.1426 17.276 13.2772C18.0574 12.4118 18.7067 11.5413 19.224 10.6657C19.7413 9.79008 20 8.95098 20 8.14841C20 7.14841 19.6666 6.31508 19 5.64841C18.3333 4.98175 17.5 4.64841 16.5 4.64841C15.7166 4.64841 15.0259 4.8404 14.4279 5.22439C13.8298 5.60835 13.2602 6.21252 12.7192 7.03689C12.6346 7.16509 12.5282 7.26125 12.4 7.32536C12.2718 7.38946 12.1384 7.42151 12 7.42151C11.8615 7.42151 11.7282 7.38946 11.6 7.32536C11.4718 7.26125 11.3654 7.16509 11.2808 7.03689Z'
              }
              fill={likeCountCheck?.isLiked ? '#FF0000' : '#6E6E82'}
            />
          </svg>
        </div>
        <span className={styles.reply_like_count}>{likeCountCheck?.count}</span>
      </div>
    </div>
  );
}
