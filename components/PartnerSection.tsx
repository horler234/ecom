import styled from "styled-components";
import Image from "next/image";
import { AppleIcon, VisaIcon } from "./icons";

const PartnersSectionContainer = styled.section`
  h2 {
    font-family: NexaBold, sans-serif;
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 33px;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const PartnerSection = () => (
  <PartnersSectionContainer>
    <h2>PARTNERS</h2>

    <ul>
      <li>
        <VisaIcon />
      </li>

      <li>
        <Image
          src="/images/amazon-icon.png"
          alt="Amazon"
          width={120}
          height={80}
          title="Amazon"
        />
      </li>

      <li>
        <AppleIcon />
      </li>

      <li>
        <Image
          src="/images/microsoft-icon.png"
          alt="Microsoft"
          width={162}
          height={108}
          title="Microsoft"
        />
      </li>

      <li>
        <Image
          src="/images/paypal-icon.png"
          alt="Paypal"
          width={101}
          height={26.87}
          title="Paypal"
        />
      </li>

      <li>
        <Image
          src="/images/shopify-icon.png"
          alt="Shopify"
          width={101}
          height={63.46}
          title="Shopify"
        />
      </li>

      <li>
        <Image
          src="/images/adidas-icon.png"
          alt="Adidas"
          width={32}
          height={31.02}
          title="Adidas"
        />
      </li>

      <li>
        <Image
          src="/images/nike-icon.png"
          alt="Nike"
          width={48}
          height={28.44}
          title="Nike"
        />
      </li>
    </ul>
  </PartnersSectionContainer>
);
