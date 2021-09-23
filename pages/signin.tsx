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

export default function SignInPage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ecom | Sign In</title>
      </Head>
      <SignInPageWrapper>
        <SignInContainer>
          <h1>Sign In</h1>
          <p>Continue shopping where you left off.</p>
          <SignInForm />

          <SignWithGoogleWrapper>
            <h4>Or</h4>

            <SignWithGoogleButton />

            <NoAccountWrapper>
              Don't have an account?{" "}
              <Link href="/signup">
                <a>Sign Up</a>
              </Link>
            </NoAccountWrapper>

            <HeaderSocialLinks />
          </SignWithGoogleWrapper>
        </SignInContainer>

        <SignInImageWrapper>
          <Image
            src="/images/sign-in-mockup.png"
            alt="Sign In"
            width={488}
            height={551}
          />
        </SignInImageWrapper>
      </SignInPageWrapper>
    </>
  );
}
