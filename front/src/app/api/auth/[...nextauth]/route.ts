import NextAuth, {
  NextAuthOptions,
  User,
  Session,
  DefaultSession,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "@/apis/index";

declare module "next-auth" {
  interface Session extends DefaultSession {
    token: string;
  }
}

interface CustomUser extends User {
  token: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<CustomUser | null> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("이메일과 비밀번호를 입력해주세요.");
        }

        try {
          const { data: token } = await api.post<string>("/auths/signin", {
            email: credentials.email,
            password: credentials.password,
          });

          if (token) {
            return { id: credentials.email, token };
          }
          throw new Error(
            "로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.",
          );
        } catch (error) {
          console.error("Login error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.token = (user as CustomUser).token;
      }
      return token;
    },
    async session({ session, token }): Promise<Session> {
      return {
        ...session,
        token: token.token as string,
      };
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

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
