import { Metadata } from 'next';
import Main from './components/Main';

export const metadata: Metadata = {
  title: 'Home',
};

export default function HomePage() {
  // const result = await getPostList();

  // if (!result) {
  //   throw new Error('에러가 발생했습니다.');
  // }

  // const data = result.reverse(); // 최신 글이 위로 오도록 정렬
  return (
    <>
      <Main />
    </>
  );
}
