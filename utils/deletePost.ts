import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export interface DeleteProp {
  _id: string;
  router: AppRouterInstance;
}

const deletePost = async (deleteProp: DeleteProp) => {
  try {
    const response = await fetch('/api/post/delete', {
      method: 'DELETE',
      body: deleteProp._id,
    });
    if (response.ok) {
      deleteProp.router.push('/');
    }
  } catch (error) {
    console.log(error);
  }
};

export default deletePost;
