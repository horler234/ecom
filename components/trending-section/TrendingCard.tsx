import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const TrendingCardContainer = styled.div`
  width: 527px;
  height: 327px;
  padding: 30px;
  flex: 0 0 auto;
  border: 2px solid #bdbdbd;
  display: flex;
  align-items: center;
  margin-right: 16px;
  justify-content: space-between;
`;

const TrendingCardDescription = styled.div`
  width: 245px;
  h4 {
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
  }

  p {
    margin: 13px 0 24px;
    color: #666666;
    font-size: 16px;
    line-height: 20.85px;
  }

  a {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary.ecomBlack};
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary.ecomBlack};
    font-weight: 700;
    font-size: 12px;
    line-height: 15.64px;
  }
`;

type TrendingCardProps = {
  imgSrc: string;
  title: string;
  desc: string;
  link: string;
};

export const TrendingCard = ({
  imgSrc,
  title,
  desc,
  link,
}: TrendingCardProps) => (
  <TrendingCardContainer>
    <Image src={imgSrc} width={185} height={215} alt={title} />

    <TrendingCardDescription>
      <h4>{title}</h4>
      <p>{desc}</p>
      <Link href={link}>
        <a>View Now</a>
      </Link>
    </TrendingCardDescription>
  </TrendingCardContainer>
);
