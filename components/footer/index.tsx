import styled from "styled-components";
import Link from "next/link";
import {
  AmazonIcon,
  AppleIcon,
  ArrowFillUpIcon,
  LogoIcon,
  PaypalIcon,
  VisaIcon,
} from "../icons";

const FooterContainer = styled.footer`
  padding: 23px 0 28px;
  width: 85%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const LogoCopyrightWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    font-family: NexaBook, sans-serif;
    font-size: 12px;
    line-height: 12px;
    margin-left: 96px;
  }
`;

const FooterIconScrollContainer = styled.div`
  display: flex;
`;

const FooterIconsContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 24px;
  }
`;

const FooterScrollUpButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #231f20;
  border: transparent;
  cursor: pointer;
  margin-left: 64px;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <LogoCopyrightWrapper>
        <Link href="/">
          <a>
            <LogoIcon iconWidth="80px" iconHeight="37.1px" />
          </a>
        </Link>

        <p>&copy; Copyrightecomteam2020</p>
      </LogoCopyrightWrapper>

      <FooterIconScrollContainer>
        <FooterIconsContainer>
          <VisaIcon />
          <AmazonIcon />
          <PaypalIcon />
          <AppleIcon />
        </FooterIconsContainer>

        <FooterScrollUpButton onClick={() => scrollTo(0, 0)}>
          <ArrowFillUpIcon iconColor="#fff" />
        </FooterScrollUpButton>
      </FooterIconScrollContainer>
    </FooterContainer>
  );
};
