import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  SearchIcon,
  CartIcon,
  ProfileIcon,
  HamburgerIcon,
} from "../components/icons";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);
  padding: 21px 0;
`;

const NavbarWrapper = styled.div`
  width: 85%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const NavbarIconList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;

  li {
    margin-left: 32px;

    svg {
      transition: all 0.3s ease;
    }

    a:hover svg {
      fill: #ffb2a0;
    }
  }

  li:last-child {
    margin-left: 40px;
  }
`;

export default function HomePage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ecom | Home</title>
      </Head>
      <NavbarContainer>
        <NavbarWrapper>
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                width={80}
                height={37.1}
                alt="Ecom"
              />
            </a>
          </Link>

          <NavbarIconList>
            <li>
              <Link href="/">
                <a>
                  <SearchIcon />
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a>
                  <CartIcon />
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a>
                  <ProfileIcon />
                </a>
              </Link>
            </li>
          </NavbarIconList>
        </NavbarWrapper>
      </NavbarContainer>
      
    </>
  );
}
