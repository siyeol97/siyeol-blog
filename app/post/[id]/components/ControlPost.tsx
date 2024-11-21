'use client';

import deletePost, { DeleteProp } from '@/utils/deletePost';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import styles from '../css/ControlPost.module.css';
import Modal from '@/components/Modal';

export default function ControlPost({ _id }: { _id: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const deletePostMutation = useMutation({
    mutationFn: (deleteProp: DeleteProp) => deletePost(deleteProp),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post-list'] });
    },
  });

  const handleReplySubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const deleteProp = { _id, router };
    deletePostMutation.mutate(deleteProp, {
      onSuccess: () => console.log('글 삭제 성공'),
    });
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>
        <Link href={`/edit/${_id}`}>수정</Link>
      </button>
      <button
        className={styles.button}
        onClick={toggleModal}
      >
        삭제
      </button>
      <Modal
        isModalOpen={isModalOpen}
        handleReplySubmit={handleReplySubmit}
        toggleModal={toggleModal}
      />
    </div>
  );
}
