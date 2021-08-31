import styled from "styled-components";
import { ArrowIOSRightIcon } from "../icons";
import Image from "next/image";
import { HeaderNavigation } from "./HeaderNavigation";
import {
  WideLinkBlackButton,
  WideLinkTransparentButton,
} from "../buttons/WideLinkButtons";
import { HeaderImage } from "./HeaderImage";
import { useState } from "react";
import { carouselData } from "../../constants/carouselData";

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

export const HomeHeader = () => {
  const [carouselValue, setCarouselValue] = useState(0);

  const skipCarousel = (num: number) => {
    if (num > 0) {
      if (carouselValue === 2) {
        setCarouselValue(0);
      } else {
        setCarouselValue(carouselValue + 1);
      }
    } else {
      if (carouselValue === 0) {
        setCarouselValue(2);
      } else {
        setCarouselValue(carouselValue - 1);
      }
    }
  };

  const carouselProd = carouselData[carouselValue];

  return (
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

        {/* <HeaderImage
        prodName="Throne Minimal Chair"
        price={999.99}
        imgSrc="minimal-chair.png"
      /> */}
        {/* <HeaderImage
        prodName="Apple Iphone 12"
        price={679.99}
        imgSrc="iphone12.png"
      /> */}
        <HeaderImage
          prodName={carouselProd.prodName}
          price={carouselProd.price}
          imgSrc={carouselProd.imgSrc}
        />

        <HeaderDotsContainer>
          {[1, 2, 3].map((val, i) => (
            <HeaderDot
              isActive={carouselValue === i}
              onClick={() => setCarouselValue(i)}
            >
              <span></span>
            </HeaderDot>
          ))}
        </HeaderDotsContainer>
      </HeaderContainer>
      <HeaderNavigation
        onLeftClick={() => skipCarousel(-1)}
        onRightClick={() => skipCarousel(1)}
      />
    </HeaderSection>
  );
};
