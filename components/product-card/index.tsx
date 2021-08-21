import styled from "styled-components";
import Image from "next/image";
import { HeartFillIcon, HeartOutlineIcon } from "../icons";
import { useState } from "react";

const LikeButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 17.82px;
  left: 18px;
  z-index: 2;
`;

const ProductCardContainer = styled.div`
  width: 281px;
  height: 389px;
  border: 1px solid #b8b8b8;
  position: relative;
`;

const ProductCardContent = styled.div`
  padding: 20px 18px;
  padding-bottom: 0;
`;

const ProductName = styled.div`
  height: 36px;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 11.96px;
  line-height: 18px;
`;

const ProductDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 11.43px;
  font-family: NexaBold, sans-serif;
  font-size: 20px;
  line-height: 20px;
  align-items: flex-end;
  h4 {
    margin-bottom: 8px;
  }

  button {
    width: 97.18px;
    height: 37.38px;
    border: 1px solid #666666;
    border-radius: 3px;
    cursor: pointer;
    background: transparent;
    font-family: NexaBold, sans-serif;
    text-transform: uppercase;
    font-size: 11.96px;
    line-height: 11.96px;
  }
`;

const DiscountCard = styled.div`
  position: absolute;
  z-index: 2;
  top: 17.63px;
  right: 15.71px;
  width: 61.88px;
  height: 30.44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f01919;
  color: #fff;
  font-size: 9px;
  line-height: 10.76px;
`;

const NewCard = styled.div`
  position: absolute;
  z-index: 2;
  top: 17.94px;
  right: 17.86px;
  width: 59.8px;
  height: 29.9px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #231f20;
  color: #fff;
  font-size: 9px;
  line-height: 10.76px;
`;

type ProductCardProps = {
  // data: {
  //   id: string;
  //   title: string;
  //   slug: string;
  //   featuredImg: string;
  //   discount?: string;
  //   createdAt: string;
  // }
  discount?: number;
};

export const ProductCard = ({ discount }: ProductCardProps) => {
  const [like, setLike] = useState(false);
  return (
    <ProductCardContainer>
      <LikeButton onClick={() => setLike(!like)}>
        {like ? (
          <HeartFillIcon
            iconColor="#F01919"
            iconHeight="18px"
            iconWidth="18px"
          />
        ) : (
          <HeartOutlineIcon />
        )}
      </LikeButton>

      {discount ? (
        <DiscountCard>{`-${discount}%`}</DiscountCard>
      ) : (
        <NewCard>NEW</NewCard>
      )}

      <Image
        src="/images/product-card-demo.png"
        height={260}
        width={281}
        alt="Product"
      />
      <ProductCardContent>
        <ProductName>
          Topshop Crossbody Bag With Hammered Metal Piece in pale blue
        </ProductName>
        <ProductDetailsContainer>
          <h4>$24</h4>
          <button>Shop</button>
        </ProductDetailsContainer>
      </ProductCardContent>
    </ProductCardContainer>
  );
};
