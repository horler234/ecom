import { NextApiRequest, NextApiResponse } from "next";
import { errors } from "../../../constants/errors";
import connectDB from "../../../middleware/mongodb";
import User from "../../../models/User";
import { HttpMethod } from "../../../types/HttpMethod";
import { UserMongoose } from "../../../types/UserMongoose";
import { handleAuthErrors } from "../../../util/apiHelpers/handleAuthErrors";

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
    const { email, password, name, isRegistered } = body;

    const user = await User.create({ name, email, password, isRegistered });
    res.status(201).json(user);
  } catch (err) {
    const errors = handleAuthErrors(err);
    res.status(400).json({ errors });
    console.error(errors);
  }
};

export default connectDB(signUpAPIRoute);
