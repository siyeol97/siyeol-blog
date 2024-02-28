'use client';

import deletePost from '@/utils/deletePost';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ControlPost({ _id }: { _id: string }) {
  const router = useRouter();
  return (
    <div>
      <button>
        <Link href={`/edit/${_id}`}>글 수정</Link>
      </button>
      <button
        onClick={() => {
          deletePost(_id, router);
        }}
      >
        글 삭제
      </button>
    </div>
  );
}
