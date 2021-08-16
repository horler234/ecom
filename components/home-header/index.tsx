import styled from "styled-components";
import { ArrowIOSRightIcon } from "../icons";
import Image from "next/image";
import { HeaderNavigation } from "./HeaderNavigation";
import { WideLinkBlackButton, WideLinkTransparentButton } from "../buttons/WideLinkButtons";

const HeaderSection = styled.section`
  padding: 140px 0 56px;
`;

const HeaderContainer = styled.div`
  width: 85%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const HeaderTextContainer = styled.div`
  width: 100%;
  max-width: 617px;
  padding-top: 56px;

  h1 {
    font-size: 64px;
    font-weight: 900;
    font-family: NexaBlack, sans-serif;
    line-height: 76.86px;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.primary.ecomBlack};
  }

  p {
    font-size: ${(props) => props.theme.typography.sizes.body16};
    line-height: ${(props) => props.theme.typography.heights.body16};
    color: #666666;
    width: 100%;
    max-width: 397px;
    margin-bottom: 32px;
    font-family: NexaBook, sans-serif;
  }
`;

const HeaderTextButtonContainer = styled.div`
  display: flex;
`;



const HeaderImageContainer = styled.div`
  position: relative;
`;

const HeaderImageCard = styled.div`
  width: 221px;
  height: 94px;
  padding: 16px;
  border: 1px solid #b8b8b8;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  position: absolute;
  bottom: -50px;
  right: -37px;
  background: #fff;

  p {
    font-size: 11.96px;
    text-transform: uppercase;
    line-height: 18px;
    margin-bottom: 24px;
  }

  span {
    font-family: NexaBold, sans-serif;
    font-size: 20px;
    line-height: 20px;
  }
`;

const HeaderDotsContainer = styled.div`
  position: absolute;
  top: 178px;
  right: -80px;
`;

const HeaderDot = styled.button<{ isActive?: boolean }>`
  width: 32px;
  height: 32px;
  cursor: pointer;
  background: transparent;
  border: 2px solid
    ${(props) =>
      props.isActive ? props.theme.colors.primary.ecomBlack : "transparent"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 14px;

  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.primary.ecomBlack};
  }
`;

export const HomeHeader = () => (
  <HeaderSection>
    <HeaderContainer>
      <HeaderTextContainer>
        <h1>SHOPPING MADE EASY AND FUN</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mattis
          vehicula et justo, lorem pulvinar ornare aliquam scelerisque.
        </p>

        <HeaderTextButtonContainer>
          <WideLinkBlackButton>Sign Up</WideLinkBlackButton>
          <WideLinkTransparentButton>
            Shop Now
            <ArrowIOSRightIcon />
          </WideLinkTransparentButton>
        </HeaderTextButtonContainer>
      </HeaderTextContainer>

      <HeaderImageContainer>
        <Image
          src="/images/minimal-chair.png"
          alt="Demo"
          width={364}
          height={461}
        />

        <HeaderImageCard>
          <p>Throne Minimal Chair</p>
          <span>$999.99</span>
        </HeaderImageCard>
      </HeaderImageContainer>

      <HeaderDotsContainer>
        <HeaderDot isActive>
          <span></span>
        </HeaderDot>
        <HeaderDot>
          <span></span>
        </HeaderDot>
        <HeaderDot>
          <span></span>
        </HeaderDot>
      </HeaderDotsContainer>
    </HeaderContainer>
    <HeaderNavigation />
  </HeaderSection>
);
