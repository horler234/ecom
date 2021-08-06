import { AuthError } from "../../types/AuthError";

export const handleAuthErrors = (err: any) => {
  const errors: AuthError = { name: "", email: "", password: "" };

  console.log(err);

  // duplicate error code
  if (err.code === 11000) {
    errors.email = "This email is already registered";

    return errors;
  }

  // validation errors
  if (err._message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};
