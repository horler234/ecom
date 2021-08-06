import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import connectDB from "../../../middleware/mongodb";
import { User } from "../../../models/User";
import bcrypt from "bcrypt";

export default connectDB(
  NextAuth({
    session: {
      jwt: true,
    },
    providers: [
      Providers.Credentials({
        async authorize(credentials: any) {
          const user: any = User.findOne({ email: credentials.email });

          if (!user) {
            throw Error("This email is not registered.");
          }
          const auth = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!auth) {
            throw Error("Incorrect password");
          }
          return { email: user.email };
        },
      }),
    ],
  })
);
