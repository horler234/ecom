import { Schema, model } from "mongoose";
import { UserMongoose } from "../types/UserMongoose";
import { isEmail } from "validator";
import bcrypt from "bcrypt";

export const userSchema = new Schema<UserMongoose>({
  name: {
    type: String,
    required: [true, "Please enter your full name"],
    minLength: [1, "Please enter your full name"],
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
  isRegistered: {
    type: Boolean,
    required: true,
  },
});

// fire a function before a new user has been saved to the database
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const User = model("user", userSchema);
