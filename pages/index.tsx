import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Navbar } from "../components/navbar";
import { HomeHeader } from "../components/home-header";
import {
  SectionHeaderContainer,
  SectionHeaderText,
} from "../components/SectionHeader";

const TrendingSectionContainer = styled.section`
  padding-top: 105px;
`;

export default function HomePage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ecom | Home</title>
      </Head>
      <Navbar />
      <HomeHeader />

      <TrendingSectionContainer>
        <SectionHeaderContainer>
          <SectionHeaderText>Trending Products</SectionHeaderText>
        </SectionHeaderContainer>
      </TrendingSectionContainer>
    </>
  );
}
