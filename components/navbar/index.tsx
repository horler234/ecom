import styled from "styled-components";
import Link from "next/link";
import { NavIcons } from "./NavIcons";
import { LogoIcon } from "../icons";
import { useState } from "react";
import { NavigationCard } from "./NavigationCard";
import { Transition } from "react-transition-group";

const NavbarContainer = styled.nav`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);
`;

const NavbarWrapper = styled.div`
  width: 85%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  padding: 21px 0;
`;

export const Navbar = () => {
  const [isNavCard, setIsNavCard] = useState(false);
  return (
    <NavbarContainer>
      <Transition
        in={isNavCard}
        timeout={{ enter: 0, exit: 600, appear: 0 }}
        mountOnEnter
        unmountOnExit
        appear
      >
        {(transitionStatus) => (
          <NavigationCard
            onCloseClick={() => setIsNavCard(false)}
            status={transitionStatus}
          />
        )}
      </Transition>

      <NavbarWrapper>
        <Link href="/">
          <a>
            <LogoIcon iconWidth="80px" iconHeight="37.1px" />
          </a>
        </Link>

        <NavIcons onHamburgerClick={() => setIsNavCard(true)} />
      </NavbarWrapper>
    </NavbarContainer>
  );
};
