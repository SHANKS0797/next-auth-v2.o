import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginCredentials } from "./types";
import { handleUserLogin } from "./app/actions/actions";

export interface SessionUserProfile {
  id: string;
  name: string;
  email: string;
  profileImage: string | null;
}

declare module "next-auth" {
  interface Session {
    user: SessionUserProfile;
  }
}

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        const payload: loginCredentials = {
          emailId: email as string,
          password: password as string,
          sessionID: "",
          mobNo: "",
          token: "",
          screenSize: "",
        };
        try {
          const user = await handleUserLogin(payload);
          if (!user.success) {
            throw new Error("Please provide valid credentials");
          } else {
            return {
              name: user.data.firstName + " " + user.data.lastName,
              email: user.data.emailId,
              id: user.data.token,
              image: user.data.profilePhoto,
            };
          }
        } catch (error) {
          throw new Error("Could not login");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },
    session({ session, token }) {
      const user = token as typeof token & SessionUserProfile;
      session.user = {
        ...session.user,
        id: user.id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
      };
      return session;
    },
  },
});
