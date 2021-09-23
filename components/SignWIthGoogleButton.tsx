import styled from "styled-components";
import { GlobalMixin } from "./GlobalMixin";
import { GlobalProps } from "./GlobalProps";
import { GoogleIcon } from "./icons";

const SignWithGoogle = styled.button<GlobalProps>`
  height: 74px;
  background: #fff;
  border: 2px solid #1a1a1a;
  border-radius: 8px;
  cursor: pointer;
  color: #1a1a1a;
  font-family: NexaBold, sans-serif;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding-left: 120px;

  svg {
    margin-right: 72px;
  }

  ${GlobalMixin}
`;

type SignWithGoogleButtonProps = {
  isSignUp?: boolean;
  onClick?: () => void;
};

export const SignWithGoogleButton = ({
  isSignUp,
  onClick,
}: SignWithGoogleButtonProps) => (
  <SignWithGoogle widthSmall="100%" onClick={onClick}>
    <GoogleIcon /> {isSignUp ? "Sign Up with Google" : "Sign In With Google"}
  </SignWithGoogle>
);
