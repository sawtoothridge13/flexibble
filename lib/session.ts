import { auth } from '@grafbase/sdk';
import jsonwebtoken from 'jsonwebtoken';
import { getServerSession, NextAuthOptions, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: '',
      clientSecret: '',
    }),
  ],
  jwt: {
    encode: ({ secret, token }) => {},
    decode: async ({ secret, token }) => {},
  },
  theme: {
    colorScheme: 'light',
    logo: '/logo.png',
  },
  callbacks: {
    async session({session}){

    },
    async signIn({ user }) {
};
