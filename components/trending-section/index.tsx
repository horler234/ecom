import styled from "styled-components";
import { SectionHeaderContainer, SectionHeaderText } from "../SectionHeader";
import { TrendingCard } from "./TrendingCard";

const TrendingSectionContainer = styled.section`
  padding-top: 105px;
  padding-bottom: 100px;
`;

const TrendingCategoriesContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap;
  padding-left: 16px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TrendingSection = () => (
  <TrendingSectionContainer id="trending">
    <SectionHeaderContainer>
      <SectionHeaderText>Collections</SectionHeaderText>
    </SectionHeaderContainer>

    <TrendingCategoriesContainer>
      <TrendingCard
        imgSrc="/images/trending-image1.png"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mattis
            vehicula et justo, lorem pulvinar ornare aliquam"
        link="/"
        title="MEN'S SUIT"
      />

      <TrendingCard
        imgSrc="/images/trending-image2.png"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mattis
            vehicula et justo, lorem pulvinar ornare aliquam"
        link="/"
        title="MEN'S SUIT"
      />

      <TrendingCard
        imgSrc="/images/trending-image1.png"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit mattis
            vehicula et justo, lorem pulvinar ornare aliquam"
        link="/"
        title="MEN'S SUIT"
      />
    </TrendingCategoriesContainer>
  </TrendingSectionContainer>
);
