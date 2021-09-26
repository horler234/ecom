import styled from "styled-components";
import { GlobalProps } from "../GlobalProps";
import { GlobalMixin } from "../GlobalMixin";
import Image from "next/image";

const SlashedPriceProductCardContainer = styled.div<GlobalProps>`
  width: 572px;
  height: 263px;
  border: 1px solid #525252;
  background: #fff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  padding: 24px;
  display: flex;
  justify-content: space-between;

  ${GlobalMixin}
`;

const ProductDetailsContainer = styled.div`
  width: 197px;

  h1 {
    font-size: 20px;
    line-height: 28px;
    height: 86px;
    margin-bottom: 9px;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

const DiscountPrice = styled.div`
  margin-bottom: 20px;
  h4 {
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.08em;
    text-decoration-line: line-through;
    color: #979797;
    margin-bottom: 12px;
    font-weight: 700;
  }

  h2 {
    font-size: 32px;
    line-height: 32px;
    font-weight: 700;
    color: #f01919;
  }
`;

const ProductShopButton = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #666666;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.08em;
  color: #1a1a1a;
  background: transparent;
  font-family: inherit;
  cursor: pointer;
`;

const DiscountRate = styled.div`
  width: 66px;
  height: 33px;
  background: #f01919;
  color: #fff;
  font-size: 8.97054px;
  line-height: 9px;
  letter-spacing: 0.08em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface SlashedPriceProductCardProps extends GlobalProps {
  imgSrc: string;
  productName: string;
  discount: number;
  initialPrice: number;
  discountPrice: number;
}

export const SlashedPriceProductCard = ({
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  imgSrc,
  productName,
  discount,
  initialPrice,
  discountPrice,
}: SlashedPriceProductCardProps) => (
  <SlashedPriceProductCardContainer
    margin={margin}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
  >
    <Image src={imgSrc} alt={productName} width={185} height={215} />

    <ProductDetailsContainer>
      <h1>{productName}</h1>

      <DiscountPrice>
        <h4>${initialPrice}</h4>
        <h2>${discountPrice}</h2>
      </DiscountPrice>

      <ProductShopButton>SHOP</ProductShopButton>
    </ProductDetailsContainer>

    <DiscountRate>-{discount}%</DiscountRate>
  </SlashedPriceProductCardContainer>
);
