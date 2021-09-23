import styled from "styled-components";
import { Input } from "./form/Input";
import Link from "next/link";
import { AuthButton } from "./buttons/AuthButton";

const SignInFormWrapper = styled.form`
  margin-top: 32px;
  width: 600px;
  margin-bottom: 24px;

  a {
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    line-height: 14.4px;
    margin-bottom: 16px;
    color: #474747;
    text-decoration: none;
  }
`;

export const SignInForm = () => {
  return (
    <SignInFormWrapper>
      <Input
        placeholder="Email"
        label="Email"
        id="sign_in_email"
        marginBottom="24px"
      />

      <Input
        isPassword
        label="Password"
        id="sign_in_password"
        placeholder="Password"
        marginBottom="8px"
      />
      <Link href="/">
        <a>Forgot Password?</a>
      </Link>

      <AuthButton widthSmall="100%">Sign In</AuthButton>
    </SignInFormWrapper>
  );
};
