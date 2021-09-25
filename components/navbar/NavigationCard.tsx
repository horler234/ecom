import styled from "styled-components";
import { NavigationCardItem } from "./NavigationCardItem";
import { useRouter } from "next/router";
import { CloseIcon } from "../icons";
import { TransitionStatus, Transition } from "react-transition-group";

/**
 *
 * NAVIGATION CARD
 */

const NavigationCardContainer = styled.div<{ status: TransitionStatus }>`
  transform: ${(props) =>
    props.status === "entered" ? "translateX(0)" : "translateX(500px)"};
  opacity: ${(props) => (props.status === "entered" ? "1" : "0")};
  transition: all ease-in-out 500ms;
  width: 500px;
  height: 750px;
  border: 1px solid #000;
  position: fixed;
  right: 0;
  top: 0;
  background: #fff;
`;

const NavigationCloseButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 32px;
  right: 32px;
`;

const NavigationList = styled.ul`
  padding: 0;
  margin-top: 81px;
  list-style: none;
`;

const NavSignUpButtonContainer = styled.div`
  padding: 40px 80px;
  padding-left: 60px;
  display: flex;
  justify-content: flex-end;

  button {
    width: 282px;
    height: 74px;
    border-radius: 8px;
    border: 2px solid #1a1a1a;
    background: #fff;
    font-family: NexaBold, sans-serif;
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

type NavigationCardProps = {
  onCloseClick: () => void;
  status?: any;
};

export const NavigationCard = ({
  onCloseClick,
  status,
}: NavigationCardProps) => {
  const router = useRouter();

  const checkActive = (path: string): boolean => router.pathname === path;

  return (
    <NavigationCardContainer status={status}>
      <NavigationCloseButton onClick={onCloseClick}>
        <CloseIcon />
      </NavigationCloseButton>

      <NavigationList>
        <NavigationCardItem name="home" href="/" isActive={checkActive("/")} />
        <NavigationCardItem
          name="about us"
          href="/about"
          isActive={checkActive("/about")}
        />
        <NavigationCardItem
          name="shop"
          href="/"
          isActive={checkActive("/shop")}
        />
        <NavigationCardItem
          name="contact"
          href="/"
          isActive={checkActive("/contact")}
        />
      </NavigationList>

      <NavSignUpButtonContainer>
        <button>Sign Up</button>
      </NavSignUpButtonContainer>
    </NavigationCardContainer>
  );
};
