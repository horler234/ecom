import styled from "styled-components";
import { ArrowIOSRightIcon } from "../icons";
import Image from "next/image";
import { HeaderNavigation } from "./HeaderNavigation";

const HeaderSection = styled.section`
  padding: 136px 0 60px;
`;

const HeaderContainer = styled.div`
  width: 85%;
  max-width: 1160px;
  margin: 0 auto;
  position: relative;
`;

const HeaderTextContainer = styled.div`
  width: 100%;
  max-width: 844px;

  h1 {
    font-size: ${(props) => props.theme.typography.sizes.h1};
    font-weight: 900;
    line-height: ${(props) => props.theme.typography.heights.h1};
    margin-bottom: 26px;
    color: ${(props) => props.theme.colors.primary.ecomBlack};
  }

  p {
    font-size: ${(props) => props.theme.typography.sizes.body16};
    line-height: ${(props) => props.theme.typography.heights.body16};
    color: #666666;
    width: 100%;
    max-width: 580px;
    margin-bottom: 56px;
  }
`;

const HeaderTextButtonContainer = styled.div`
  display: flex;
`;

const HeaderTextButton = styled.button`
  width: 282px;
  height: 74px;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 700;
  align-items: center;
  border: transparent;
  font-size: 16px;
`;

const HeaderSignUpButton = styled(HeaderTextButton)`
  background: ${(props) => props.theme.colors.primary.ecomBlack};
  color: #fff;
  margin-right: 16px;
`;

const HeaderShopNowButton = styled(HeaderTextButton)`
  background: transparent;
  border: 2px solid ${(props) => props.theme.colors.primary.ecomBlack};
  display: flex;
  justify-content: space-between;
  padding-right: 25px;
  padding-left: 44px;
  transition: all 0.3s ease;

  &:hover {
    padding-right: 20px;
  }
`;

const HeaderImageContainer = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
`;

const HeaderDotsContainer = styled.div`
  position: absolute;
  top: 200px;
  right: -50px;
`;

const HeaderDot = styled.div<{ isActive?: boolean }>`
  width: 32px;
  height: 32px;
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
          vehicula et justo, lorem pulvinar ornare aliquam scelerisque. Aliquam
          metus diam condimentum hendrerit nulla. Diam dolor arcu, nunc nibh.
          Malesuada dignissim elit morbi convallis amet, iaculis consectetur
          nibh.
        </p>

        <HeaderTextButtonContainer>
          <HeaderSignUpButton>Sign Up</HeaderSignUpButton>
          <HeaderShopNowButton>
            Shop Now
            <ArrowIOSRightIcon />
          </HeaderShopNowButton>
        </HeaderTextButtonContainer>
      </HeaderTextContainer>

      <HeaderImageContainer>
        <Image src="/images/chair.png" alt="Demo" width={364} height={461} />
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

      <HeaderNavigation />
    </HeaderContainer>
  </HeaderSection>
);
