import Head from "next/head";
import styled from "styled-components";
import { PlayCircleIcon } from "../components/icons";
import { SectionHeaderText } from "../components/SectionHeader";
import { PartnerSection } from "../components/PartnerSection";

const AboutPageMainContainer = styled.main`
  width: 85%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 120px 0 91px;
  border-bottom: 1px solid #000;
`;

const AboutPageContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 63px;
  margin-bottom: 166px;
`;

const AboutPageVideoWrapper = styled.div`
  background: url("/images/about-page-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 596px;
  height: 386px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutPagePlayVideoButton = styled.button`
  background: transparent;
  border: transparent;
  cursor: pointer;
`;

const AboutPageDescription = styled.div`
  width: 465px;
  font-family: NexaBook, sans-serif;
  font-size: 16px;
  line-height: 24.05px;
`;

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ecom | About Us</title>
      </Head>

      <AboutPageMainContainer>
        <SectionHeaderText>About Us</SectionHeaderText>

        <AboutPageContentContainer>
          <AboutPageVideoWrapper>
            <AboutPagePlayVideoButton>
              <PlayCircleIcon iconColor="#666666" />
            </AboutPagePlayVideoButton>
          </AboutPageVideoWrapper>

          <AboutPageDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mattis
            vehicula et justo, lorem pulvinar ornare aliquam scelerisque.
            Aliquam metus diam condimentum hendrerit nulla. Diam dolor arcu,
            nunc nibh. Malesuada dignissim elit morbi convallis amet, iaculis
            consectetur nibh.
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mattis
            vehicula et justo, lorem pulvinar ornare aliquam scelerisque.
            Aliquam metus diam condimentum hendrerit nulla. Diam dolor arcu,
            nunc nibh. Malesuada dignissim elit morbi convallis amet, iaculis
            consectetur nibh.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mattis
            vehicula et justo, lorem pulvinar ornare aliquam scelerisque.
            Aliquam metus diam condimentum hendrerit nulla. Diam dolor arcu,
            nunc nibh. Malesuada dignissim elit morbi convallis amet, iaculis
            consectetur nibh.
          </AboutPageDescription>
        </AboutPageContentContainer>

        <PartnerSection />
      </AboutPageMainContainer>
    </>
  );
}
