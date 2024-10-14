import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "@/apis/index";

declare module "next-auth" {
  interface Session {
    token: {
      token: string;
    };
    error?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error(JSON.stringify({ code: "VALIDATION_ERROR" }));
        }

        try {
          const response = await api.post("/auths/signin", {
            email: credentials.email,
            password: credentials.password,
          });

          if (response.status === 200) {
            return {
              id: credentials.email,
              token: response.data.token,
              email: credentials.email,
            };
          } else {
            throw new Error();
          }
        } catch (error) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const err = error as { response?: { data?: any } };
          if (err.response && err.response.data) {
            throw new Error(JSON.stringify(err.response.data));
          }
          throw new Error(JSON.stringify({ code: "UNKNOWN_ERROR" }));
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userToken = (user as unknown as { token: string }).token;
      }
      return token;
    },
    async session({ session, token }) {
      session.token = { token: token.userToken as string };
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 시간
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
