import styled from "styled-components";

const WideLinkButton = styled.button`
  width: 282px;
  height: 74px;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 700;
  align-items: center;
  border: transparent;
  font-size: 16px;
`;

export const WideLinkBlackButton = styled(WideLinkButton)`
  background: ${(props) => props.theme.colors.primary.ecomBlack};
  color: #fff;
  margin-right: 16px;
`;

export const WideLinkTransparentButton = styled(WideLinkButton)`
  background: transparent;
  border: 2px solid ${(props) => props.theme.colors.primary.ecomBlack};
  display: flex;
  justify-content: space-between;
  padding-right: 25px;
  padding-left: 44px;
  transition: all 0.3s ease;

  &:hover {
    padding-right: 20px;
  }
`;
