import Image from "next/image";
import { Transition, TransitionStatus } from "react-transition-group";
import styled from "styled-components";
import { CarouselDataType } from "../../constants/carouselData";

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
    width: 189px;
    height: 36px;
    margin-bottom: 6px;
  }

  span {
    font-family: NexaBold, sans-serif;
    font-size: 20px;
    line-height: 20px;
  }
`;

export const HeaderImage = ({ prodName, imgSrc, price }: CarouselDataType) => (
  <HeaderImageContainer>
    <Image src={`/images/${imgSrc}`} alt={prodName} width={364} height={461} />

    <HeaderImageCard>
      <p>{prodName}</p>
      <span>{`$${price}`}</span>
    </HeaderImageCard>
  </HeaderImageContainer>
);
