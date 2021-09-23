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
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";
import { ArrowHeadLeftIcon } from "../components/icons";

export default function HomePage({ products }) {
  console.log(products);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ecom | Home</title>
      </Head>
      <HomeHeader />
      <TrendingSection />
      <AboutSection />
      <CategoriesSection />
      <ContactSection />
      <Footer />
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
