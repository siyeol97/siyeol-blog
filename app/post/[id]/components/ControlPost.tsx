'use client';

import deletePost from '@/utils/deletePost';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ControlPost({ _id }: { _id: string }) {
  const router = useRouter();
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button>
        <Link href={`/edit/${_id}`}>수정</Link>
      </button>
      <button
        onClick={() => {
          deletePost(_id, router);
        }}
      >
        삭제
      </button>
    </div>
  );
}
