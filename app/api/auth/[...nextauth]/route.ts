import NextAuth from "next-auth";
import { v4 as uuidv4 } from "uuid";

import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 60 * 60 * 24,
  },
  pages: {
    signIn: "/admin",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        login: {},
        password: {},
      },
      async authorize(credentials, req) {
        const admin = {
          login: process.env.ADMIN_LOGIN,
          password: process.env.ADMIN_PASSWORD,
          id: uuidv4(),
        };
        if (
          admin.login === credentials?.login &&
          admin.password === credentials?.password
        ) {
          return {
            login: admin.login,
            password: admin.password,
            id: admin.id,
          };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
