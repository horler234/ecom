import styled from "styled-components";
import { SectionHeaderText } from "../SectionHeader";
import { WideLinkTransparentButton } from "../buttons/WideLinkButtons";
import { ArrowIOSRightIcon, PlayCircleIcon } from "../icons";

const HomeAboutSectionContainer = styled.section`
  padding: 105px 0 87px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  width: 85%;
  max-width: 1160px;
  margin: 0 auto;
`;

const HomeAboutSectionBox = styled.div`
  
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.56) 0%,
      rgba(0, 0, 0, 0) 45.91%
    ),
    url("/images/about-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 386px;
  padding: 48px;
  padding-left: 56px;
  position: relative;
`;

const HomeAboutHeader = styled(SectionHeaderText)`
  color: #fff;
  margin-bottom: 16px;
`;

const HomeAboutText = styled.p`
  color: #fff;
  font-family: NexaBook, sans-serif;
  font-size: 16px;
  line-height: 24.05px;
  margin-bottom: 32px;
  width: 100%;
  max-width: 358px;
`;

const AboutLearnMoreButton = styled(WideLinkTransparentButton)`
  border-color: #fff;
  color: #fff;
`;

const PlayVideoButton = styled.button`
  width: 74px;
  height: 74px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  font-family: inherit;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 12px;
  left: 50%;
  top: 50%;
  margin-top: -37px;
  margin-left: -37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1a1a1a;

  svg {
    margin-bottom: 8px;
  }
`;

export const AboutSection = () => (
  <HomeAboutSectionContainer>
    <HomeAboutSectionBox>
      <PlayVideoButton>
        <PlayCircleIcon />
        Play Video
      </PlayVideoButton>
      <HomeAboutHeader>About Us</HomeAboutHeader>
      <HomeAboutText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mattis
        vehicula et justo, lorem pulvinar ornare aliquam scelerisque. Aliquam
        metus diam condimentum hendrerit nulla. Diam dolor arcu, nunc nibh.
      </HomeAboutText>

      <AboutLearnMoreButton>
        Learn More
        <ArrowIOSRightIcon iconColor="#fff" />
      </AboutLearnMoreButton>
    </HomeAboutSectionBox>
  </HomeAboutSectionContainer>
);
