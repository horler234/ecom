import styled from "styled-components";
import Link from "next/link";
import { SearchIcon, CartIcon, ProfileIcon, HamburgerIcon } from "../icons";

export const NavbarIconList = styled.ul`
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

  button {
    background: transparent;
    border: transparent;
    cursor: pointer;

    &:hover svg {
      fill: #ffb2a0;
    }
  }
`;

type NavIconsProps = {
  onHamburgerClick: () => void;
};

export const NavIcons = ({ onHamburgerClick }: NavIconsProps) => (
  <NavbarIconList>
    <li>
      <Link href="/">
        <a>
          <SearchIcon />
        </a>
      </Link>
    </li>

    <li>
      <Link href="/cart">
        <a>
          <CartIcon />
        </a>
      </Link>
    </li>

    {/* <li>
              <Link href="/">
                <a>
                  <ProfileIcon />
                </a>
              </Link>
            </li> */}

    <li>
      <button onClick={onHamburgerClick}>
        <HamburgerIcon />
      </button>
    </li>
  </NavbarIconList>
);
