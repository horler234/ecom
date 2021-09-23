import styled from "styled-components";
import Link from "next/link";
import { SignInFormWrapper } from "./SignInForm";
import { Input } from "./form/Input";
import { AuthButton } from "./buttons/AuthButton";

export const SignUpFormLinkWrapper = styled.div`
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 14.4px;
  color: #474747;

  a {
    color: #1A1A1A;
    text-decoration: none;
  }
`;

export const SignUpForm = () => {
  return (
    <SignInFormWrapper>
      <Input
        placeholder="Full Name"
        label="Full Name"
        id="sign_up_full_name"
        marginBottom="16px"
      />

      <Input
        placeholder="Email"
        label="Email"
        id="sign_up_email"
        marginBottom="24px"
      />

      <Input
        isPassword
        placeholder="Password"
        label="Password"
        id="sign_up_password"
        marginBottom="16px"
      />

      <SignUpFormLinkWrapper>
        By signing up, you agree to our{" "}
        <Link href="/">
          <a>TERMS & CONDITIONS</a>
        </Link>{" "}
      </SignUpFormLinkWrapper>

      <AuthButton widthSmall="100%">Sign Up</AuthButton>
    </SignInFormWrapper>
  );
};
