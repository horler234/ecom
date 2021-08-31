import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRightIcon } from "../icons";

const NavigationListItem = styled.li<{ isActive: boolean }>`
  padding: 40px 80px;
  padding-left: 60px;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    opacity: ${(props) => (props.isActive ? "1" : "0")};
  }
  a {
    color: #1a1a1a;
    font-family: NexaBlack, sans-serif;
    font-size: 48px;
    line-height: 48px;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

type NavigationCardItemProps = {
  name: string;
  href: string;
  isActive: boolean;
};

export const NavigationCardItem = ({
  name,
  href,
  isActive,
}: NavigationCardItemProps) => {
  return (
    <NavigationListItem isActive={isActive}>
      <ArrowRightIcon />

      <Link href={href}>
        <a>{name}</a>
      </Link>
    </NavigationListItem>
  );
};
