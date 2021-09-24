import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  WideLinkBlackButton,
  WideLinkTransparentButton,
} from "../components/buttons/WideLinkButtons";
import { NoAccountWrapper } from "../components/form/AuthFormStyles";
import { HeaderTextButtonContainer } from "../components/home-header";
import { HeaderSocialLinks } from "../components/home-header/HeaderSocialLinks";
import { ArrowIOSRightIcon } from "../components/icons";

const CartMainWrapper = styled.main`
  width: 85%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 96px 0;
  border-bottom: 1px solid #000;

  h1 {
    font-size: 40px;
    line-height: 40px;
    font-family: NexaBlack, sans-serif;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 48px;
  }
`;

const EmptyCartContainer = styled.div`
  background: url("/images/empty-card-mockup.png");
  height: 327px;
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyCartText = styled.h2`
  font-family: NexaBold, sans-serif;
  font-size: 24px;
  line-height: 24px;
  z-index: 1;
`;

const EmptyCartOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
`;

const CartNavButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 33px;
  margin-bottom: 32px;
`;

export default function CartPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ecom | Cart</title>
      </Head>

      <CartMainWrapper>
        <h1>Cart</h1>

        <EmptyCartContainer>
          <EmptyCartOverlay />
          <EmptyCartText>YOUR CART IS EMPTY</EmptyCartText>
        </EmptyCartContainer>

        <CartNavButtons>
          <HeaderTextButtonContainer>
            <WideLinkBlackButton onClick={() => router.push("/signup")}>
              Sign Up
            </WideLinkBlackButton>
            <WideLinkTransparentButton>
              Shop Now
              <ArrowIOSRightIcon />
            </WideLinkTransparentButton>
          </HeaderTextButtonContainer>
        </CartNavButtons>

        <NoAccountWrapper>
          Already have an account?{" "}
          <Link href="/signin">
            <a>SIGN IN to see your cart</a>
          </Link>
        </NoAccountWrapper>

        <HeaderSocialLinks />
      </CartMainWrapper>
    </>
  );
}
