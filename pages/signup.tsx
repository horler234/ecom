import Head from "next/head";
import Image from "next/image";
import { SignInForm } from "../components/SignInForm";
import { SignWithGoogleButton } from "../components/SignWIthGoogleButton";
import Link from "next/link";
import { HeaderSocialLinks } from "../components/home-header/HeaderSocialLinks";
import {
  SignInPageWrapper,
  SignInContainer,
  SignWithGoogleWrapper,
  NoAccountWrapper,
  SignInImageWrapper,
} from "../components/form/AuthFormStyles";
import { SignUpForm } from "../components/SignUpForm";

export default function SignInPage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ecom | Sign Up</title>
      </Head>
      <SignInPageWrapper>
        <SignInContainer isSignUp>
          <h1>Sign Up</h1>
          <p>Start shopping form our list of interesting products.</p>
          <SignUpForm />

          <SignWithGoogleWrapper>
            <h4>Or</h4>

            <SignWithGoogleButton isSignUp />

            <NoAccountWrapper isSignUp>
              Already have an account?{" "}
              <Link href="/signin">
                <a>Sign In</a>
              </Link>
            </NoAccountWrapper>

            <HeaderSocialLinks />
          </SignWithGoogleWrapper>
        </SignInContainer>

        <SignInImageWrapper isSignUp>
          <Image
            src="/images/sign-up-mockup.png"
            alt="Sign In"
            width={488}
            height={551}
          />
        </SignInImageWrapper>
      </SignInPageWrapper>
    </>
  );
}
