import { useRouter } from "next/router";
import styled from "styled-components";
import { SectionHeaderText } from "../SectionHeader";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

const ContactSectionContainer = styled.section<{ isShowHeader?: boolean }>`
  width: 85%;
  max-width: 1160px;
  margin: 0 auto;
  padding: ${(props) => (props.isShowHeader ? "0 0 96px" : "96px 0;")};
  border-bottom: 1px solid #000;
`;

const ContactSectionFlex = styled.div`
  margin-top: 56px;
  display: flex;
  justify-content: space-between;
`;

export const ContactSection = () => {
  const router = useRouter();
  const isShowHeader: boolean =
    router.pathname === "/cart" || router.pathname === "/about";
  return (
    <ContactSectionContainer isShowHeader={isShowHeader}>
      {!isShowHeader && <SectionHeaderText>Contact</SectionHeaderText>}
      <ContactSectionFlex>
        <ContactInfo />
        <ContactForm />
      </ContactSectionFlex>
    </ContactSectionContainer>
  );
};
