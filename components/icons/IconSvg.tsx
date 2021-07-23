import styled from "styled-components";

export interface IconSvgProps {
  iconColor?: string;
  iconHeight?: string;
  iconWidth?: string;
}

export const IconSvg = styled.svg<IconSvgProps>`
  fill: ${(props) =>
    props.iconColor ?? props.theme.colors.primary.ecomBlack};
  ${(props) => props.iconHeight && `height: ${props.iconHeight}`};
  ${(props) => props.iconWidth && `width: ${props.iconWidth}`};
`;
