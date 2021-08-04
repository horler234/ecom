import { Schema, model } from "mongoose";
import { UserMongoose } from "../types/UserMongoose";
import { isEmail } from "validator";

export const userSchema = new Schema<UserMongoose>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a valid password"],
    minLength: [6, "Minimum password length must be 6 characters"],
  },
});

export const User = model("user", userSchema);
