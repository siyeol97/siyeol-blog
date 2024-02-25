'use client';

import Button from '@/components/Button';
import deletePost from '@/utils/deletePost';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ControlPost({ _id }: { _id: string }) {
  const router = useRouter();
  return (
    <div>
      <Button>
        <Link href={`/edit/${_id}`}>글 수정</Link>
      </Button>
      <Button
        onClick={() => {
          deletePost(_id, router);
        }}
      >
        글 삭제
      </Button>
    </div>
  );
}
