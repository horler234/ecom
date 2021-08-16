import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";
import { HeaderScroll } from "../../keyframes/HeaderScroll";

const HeaderBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  max-width: 1160px;
  margin: 0 auto;
  margin-top: 150px;

`;

const HeaderSocialLinks = styled.ul`
  list-style: none;
  display: flex;
  padding-top: 40px;

  li {
    margin-right: 40px;

    a {
      text-transform: uppercase;
      text-decoration: none;
      color: ${(props) => props.theme.colors.primary.ecomBlack};
      font-size: 12px;
      line-height: 12px;
      font-weight: 700;
      &:hover {
        color: ${(props) => props.theme.colors.secondary.ecomOrange};
      }
    }
  }

  li:last-child {
    margin-right: 0;
  }
`;

const HeaderBottomScroll = styled.button`
  width: 32px;
  height: 64px;
  border: 2px solid ${(props) => props.theme.colors.primary.ecomBlack};
  border-radius: 24px;
  position: relative;
  cursor: pointer;
  background: transparent;

  span {
    width: 2px;
    height: 8px;
    background: ${(props) => props.theme.colors.primary.ecomBlack};
    position: absolute;
    left: 14px;
    bottom: 0;
    animation: ${HeaderScroll} 1s ease-in-out infinite;
  }
`;

const HeaderCarouselDirectionButton = styled.button`
  width: 73px;
  height: 57.6px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.primary.ecomBlack};
  svg {
    transition: all 0.6s ease;
  }
`;

const HeaderCarouselLeftButton = styled(HeaderCarouselDirectionButton)`
  background: transparent;

  &:hover svg {
    margin-left: -10px;
  }
`;

const HeaderCarouselRightButton = styled(HeaderCarouselDirectionButton)`
  background: ${(props) => props.theme.colors.primary.ecomBlack};

  &:hover svg {
    margin-right: -10px;
  }
`;

type HeaderNavigationProps = {
  onLeftClick?: () => void;
  onRightClick?: () => void;
};

export const HeaderNavigation = ({
  onLeftClick,
  onRightClick,
}: HeaderNavigationProps) => {
  const router = useRouter();
  return (
    <HeaderBottomContainer>
      <HeaderSocialLinks>
        <li>
          <Link href="/">
            <a target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Link>
        </li>
      </HeaderSocialLinks>

      <HeaderBottomScroll onClick={() => router.push("#trending")}>
        <span></span>
      </HeaderBottomScroll>

      <div>
        <HeaderCarouselLeftButton onClick={onLeftClick}>
          <ArrowLeftIcon iconHeight="13.69px" iconWidth="13.69px" />
        </HeaderCarouselLeftButton>

        <HeaderCarouselRightButton onClick={onRightClick}>
          <ArrowRightIcon
            iconColor="#fff"
            iconHeight="13.69px"
            iconWidth="13.69px"
          />
        </HeaderCarouselRightButton>
      </div>
    </HeaderBottomContainer>
  );
};
