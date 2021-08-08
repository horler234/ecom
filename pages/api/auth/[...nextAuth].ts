import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import connectDB from "../../../middleware/mongodb";
import User from "../../../models/User";
import bcrypt from "bcrypt";
import { connectToDatabase } from "../../../lib/db";

export default connectDB(
  NextAuth({
    session: {
      jwt: true,
    },
    providers: [
      Providers.Credentials({
        id: "credentials",
        async authorize(credentials: any) {
          const client = await connectToDatabase();

          // const user: any = User.findOne({ email: credentials.email });
          const user: any = await client
            .db()
            .collection("users")
            .findOne({ email: credentials.email });

          console.log(user);

          if (!user) {
            client.close();
            throw Error("This email is not registered.");
          }
          const auth = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!auth) {
            client.close();
            throw Error("Incorrect password");
          }

          client.close();
          // return { email: user.email, name: user.name };

          return credentials;
        },
      }),
    ],

    database: process.env.MONGODB_URI,
    // callbacks: {
    //   session: async (session, user) => {
    //     session.id = user.id;
    //     return Promise.resolve(session);
    //   },
    // },
  })
);
