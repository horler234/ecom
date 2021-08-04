import { NextApiRequest, NextApiResponse } from "next";
import { errors } from "../../constants/errors";
import connectDB from "../../middleware/mongodb";
import { User } from "../../models/User";
import { HttpMethod } from "../../types/HttpMethod";
import { UserMongoose } from "../../types/UserMongoose";

const signUpAPIRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method as HttpMethod;

  if (method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({
      error: errors.REQUEST_METHOD_INVALID,
    });
    return;
  }

  try {
    const body: UserMongoose = req.body;

    if (!body) {
      res.status(400).json({ error: errors.REQUEST_BODY_INVALID });
      return;
    }
    const { email, password, name } = body;

    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(400).send('Error, user not created');
  }
};

export default connectDB(signUpAPIRoute);
