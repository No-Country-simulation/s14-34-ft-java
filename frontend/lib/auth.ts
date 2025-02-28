import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const AuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {

        email: { label: "email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,

          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );

        // const resp = await res.json();
        // if (resp.status === 401) {
        //   throw new Error("Credenciales incorrectas");
        // }
        // console.log(resp)
        
        const user = await res.json();

          if (res.status === 401) {
            throw new Error("Credenciales incorrectas");

          }
          return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      console.log(session)
      return session;
    }
  },
  pages: {
    signIn: "/auth/login",
  },
  

};