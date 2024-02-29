import { connectDB } from '@/utils/database';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // 로그인폼 생성
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },

      // credential 로그인 요청시 실행
      // eslint-disable-next-line
      async authorize(credentials): Promise<any> {
        if (!credentials) {
          return null;
        }
        const db = (await connectDB).db('siyeol_blog');
        const user = await db
          .collection('created_user_account')
          .findOne({ email: credentials.email });
        if (!user) {
          console.log('해당 유저의 정보가 없습니다');
          return null;
        }
        const passwordCheck = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!passwordCheck) {
          console.log('비밀번호가 틀렸습니다.');
          return null;
        }
        // user = 해당되는 'created_user_account' collection에 저장된 user 정보
        return user;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_SECRET_ID!,
      clientSecret: process.env.GITHUB_SECRET_KEY!,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY!,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, //1일
  },

  callbacks: {
    // jwt 만들 때 실행
    jwt: async ({ token }) => {
      // 소셜로그인 요청 시 account, profile !== undefined
      // credential 로그인 요청시 account !== undefined, profile === undefined,
      // 이후 둘다 undefined
      return token;
    },

    // 유저 세션이 조회될 때 마다 실행
    session: async ({ session }) => {
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },

  secret: process.env.NEXT_AUTH_SECRET_KEY,
};
export default NextAuth(authOptions);
