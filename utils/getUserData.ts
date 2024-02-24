import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

const getUserData = async () => {
  const session = await getServerSession(authOptions);
  const userData = {
    name: session?.user?.name,
    email: session?.user?.email,
    image: session?.user?.image,
  };
  return userData;
};

export default getUserData;
