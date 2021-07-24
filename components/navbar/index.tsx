import styled from "styled-components";
import Link from "next/link";
import { NavIcons } from "./NavIcons";
import { LogoIcon } from "../icons";

export const NavbarContainer = styled.nav`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);
  padding: 21px 0;
`;

export const NavbarWrapper = styled.div`
  width: 85%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Navbar = () => (
  <NavbarContainer>
    <NavbarWrapper>
      <Link href="/">
        <a>
          <LogoIcon iconWidth="80px" iconHeight="37.1px" />
        </a>
      </Link>

      <NavIcons />
    </NavbarWrapper>
  </NavbarContainer>
);
