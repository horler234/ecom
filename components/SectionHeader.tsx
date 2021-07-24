import styled from "styled-components";

export const SectionHeaderContainer = styled.div`
  width: 85%;
  max-width: 1160px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 40px;
`;

export const SectionHeaderText = styled.h3`
  font-family: ${props => props.theme.typography.fontFamily.montserrat};
  color: ${(props) => props.theme.colors.primary.ecomBlack};
  font-size: 40px;
  font-weight: 500;
  line-height: 48.76px;
  text-transform: uppercase;
`;