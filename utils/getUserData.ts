import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

const getUserData = async () => {
  const session = await getServerSession(authOptions);

  const userData = {
    name: session?.user?.name,
    email: session?.user?.email,
  };
  // console.log('userData: ', userData);
  // console.log('==================================');
  // console.log('session: ', session);
  // console.log('==================================');
  return userData;
};

export default getUserData;
