import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

const getUserData = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return null;
  }

  const userData: UserData = {
    name: session.user.name!,
    email: session.user.email!,
  };
  return userData;
};

export default getUserData;
