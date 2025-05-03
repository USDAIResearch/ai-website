import { createUser, findUser } from "@/app/actions/admin/action";
import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/admin",
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google" && profile.email_verified) {
        let exisitingUser = await findUser(profile);
        if (!exisitingUser) {
          exisitingUser = await createUser(profile);
        }
        if (exisitingUser.role === "admin") {
          return true;
        }
        return false;
      }
      return false;
    },
  },
};
