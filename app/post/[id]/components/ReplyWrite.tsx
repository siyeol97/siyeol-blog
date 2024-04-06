'use client';

import { ChangeEvent, MouseEvent, useState } from 'react';
import styles from '../css/ReplyWrite.module.css';
import { Session } from 'next-auth';
import { Reply } from '@/app/type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import writeReply, { NewReply } from '@/utils/writeReply';
import ReplyLikeInfo from './ReplyLikeInfo';
import { LikeCountCheck } from '../type';

interface Props {
  replyData: Reply[] | undefined;
  post_id: string;
  session: Session | null;
  likeCountCheck: LikeCountCheck | undefined;
}

export default function ReplyWrite({
  replyData,
  post_id,
  session,
  likeCountCheck,
}: Props) {
  const replyCount = replyData?.length;
  const [comment, setComment] = useState('');
  const queryClient = useQueryClient();

  const onChangeReply = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length >= 1000) {
      return;
    }
    setComment(e.target.value);
  };

  const uploadReplyMutation = useMutation({
    mutationFn: (newReply: NewReply) => writeReply(newReply),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reply-list'] });
    },
  });

  const handleReplySubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!session) {
      alert('로그인필요');
      return;
    }
    const newReply: NewReply = { comment: comment, post_id: post_id };
    uploadReplyMutation.mutate(newReply, {
      onSuccess: () => console.log('댓글 등록 성공'),
    });
    setComment('');
  };

  return (
    <div className={styles.wrapper}>
      <ReplyLikeInfo
        replyCount={replyCount}
        post_id={post_id}
        session={session}
        likeCountCheck={likeCountCheck}
      />
      <div className={styles.reply_input_area}>
        <textarea
          name='reply'
          value={comment}
          className={styles.reply_input}
          onChange={onChangeReply}
        />
        <button
          disabled={uploadReplyMutation.isPending || !comment}
          onClick={handleReplySubmit}
          className={styles.button}
        >
          댓글 등록
        </button>
      </div>
    </div>
  );
}
