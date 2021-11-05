import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { _getUser, _createUser } from "@api/user/_operations";
import {
  _getAdministrator,
  _createAdministrator,
} from "@api/administrator/_operations";

import { verifyPassword, hashPassword } from "@lib/auth/passwords";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  errorFormat: "minimal",
});
export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
  },
  theme: {
    colorScheme: "auto",
    brandColor: "#fff",
    logo: `${process.env.BASE_URL}/assets/planet-scale.svg`,
  },
  pages: {
    signIn: "/sign-in",
    // signIn: '/auth/signin',
    // signOut: "/auth/logout",
    // error: "/auth/error", // Error code passed in query string as ?error=
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "app-login",
      name: "App Login",
      credentials: {
        email: {
          label: "Email Address",
          type: "email",
          placeholder: "john.doe@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your super secure password",
        },
      },
      async authorize(credentials) {
        let maybeUser = await _getUser({
          where: {
            email: credentials.email,
          },
          select: {
            id: true,
            email: true,
            password: true,
            name: true,
          },
        });

        console.log("maybeUser", maybeUser);

        if (!maybeUser) {
          // maybeUser = await _createUser({
          //   data: {
          //     email: credentials.email,
          //     password: await hashPassword(credentials.password),
          //   },
          // });
          throw new Error("Some unknown user error");
        } else {
          // TODO: If single form for sign up and sign ing
        }

        const { email, password } = credentials;

        if (!email || !email.includes("@")) {
          throw new Error("Invalid email");
        }

        if (!password || password.trim().length < 12) {
          throw new Error(
            "Invalid input - password should be at least 12 characters long."
          );
        }

        const isValid = await verifyPassword(
          credentials.password,
          maybeUser.password
        );

        if (!isValid) {
          throw new Error("Incorrect password");
        }

        return {
          id: maybeUser.id,
          email: maybeUser.email,
          name: maybeUser.name,
        };
      },
    }),
    CredentialsProvider({
      id: "admin-login",
      name: "Administrator Login",
      credentials: {
        email: {
          label: "Email Address",
          type: "email",
          placeholder: "john.doe@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your super secure password",
        },
      },
      async authorize(credentials) {
        let maybeAdministrator = await _getAdministrator({
          where: {
            email: credentials.email,
          },
          select: {
            id: true,
            email: true,
            password: true,
            name: true,
          },
        });

        if (!maybeAdministrator) {
          throw new Error("Unauthorized.");
        }

        const { email, password } = credentials;
        if (!email || !email.includes("@")) {
          throw new Error("Invalid email");
        }

        if (!password || password.trim().length < 12) {
          throw new Error(
            "Invalid input - password should be at least 12 characters long."
          );
        }
        const isValid = await verifyPassword(
          credentials.password,
          maybeAdministrator.password
        );

        if (!isValid) {
          throw new Error("Incorrect password");
        }

        return {
          id: maybeAdministrator.id,
          email: maybeAdministrator.email,
          name: maybeAdministrator.name,
          username: maybeAdministrator.email,
          type: "administrator",
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
});
