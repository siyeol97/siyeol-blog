import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const deletePost = async (_id: string, router: AppRouterInstance) => {
  try {
    const response = await fetch('/api/post/delete', {
      method: 'DELETE',
      body: _id,
    });
    if (response.ok) {
      router.push('/');
      router.refresh();
    }
  } catch (error) {
    console.log(error);
  }
};

export default deletePost;
