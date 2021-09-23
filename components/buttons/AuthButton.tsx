import styled from "styled-components";
import { GlobalMixin } from "../GlobalMixin";
import { GlobalProps } from "../GlobalProps";

export const AuthButton = styled.button<GlobalProps>`
  height: 74px;
  background: #1a1a1a;
  color: #fff;
  text-transform: uppercase;
  font-family: NexaBold, sans-serif;
  font-size: 16px;
  line-height: 16px;
  border: transparent;
  border-radius: 8px;
  cursor: pointer;

  ${GlobalMixin}
`;
