'use client';

import deletePost, { DeleteProp } from '@/utils/deletePost';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

export default function ControlPost({ _id }: { _id: string }) {
  const router = useRouter();
  const queryClient = useQueryClient();

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
    <div style={{ display: 'flex', gap: '10px' }}>
      <button>
        <Link href={`/edit/${_id}`}>수정</Link>
      </button>
      <button onClick={handleReplySubmit}>삭제</button>
    </div>
  );
}
