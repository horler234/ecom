import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Navbar } from "../components/navbar";
import { HomeHeader } from "../components/home-header";
import { TrendingSection } from "../components/trending-section";
import { createClient } from "contentful";
import { AboutSection } from "../components/about-section";
import { CategoriesSection } from "../components/categories-section";
import { SectionHeaderText } from "../components/SectionHeader";
import { EmailIcon, PhoneCallIcon, PinIcon } from "../components/icons";

const ContactSectionContainer = styled.section`
  width: 85%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 96px 0;
  border-bottom: 1px solid #000;
`;




export default function HomePage({ products }) {
  console.log(products);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ecom | Home</title>
      </Head>
      <Navbar />
      <HomeHeader />
      <TrendingSection />
      <AboutSection />
      <CategoriesSection />

      <ContactSectionContainer>
        <SectionHeaderText>Contact</SectionHeaderText>
        <EmailIcon iconColor="yellow" />
      </ContactSectionContainer>

      
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "products" });

  return {
    props: {
      products: res.items,
    },
  };
}
