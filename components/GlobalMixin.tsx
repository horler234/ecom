import { css } from "styled-components";
import { GlobalProps } from "./GlobalProps";

/**
 * GlobalMixin is used in all the components
 * to allow the props to change padding and margin.
 *
 * Instead of adding them into every file we can use the "css" helper
 * from styled-components to reuse this logic.
 * Read about it here -> https://styled-components.com/docs/api#css
 */
export const GlobalMixin = css<GlobalProps>`
  ${(props) => props.align && `text-align: ${props.align}`};

  ${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};

  ${(props) => props.padding && `padding: ${props.padding}`};
  ${(props) => props.padTop && `padding-top: ${props.padTop}`};
  ${(props) => props.padBottom && `padding-bottom: ${props.padBottom}`};
  ${(props) => props.padLeft && `padding-left: ${props.padLeft}`};
  ${(props) => props.padRight && `padding-right: ${props.padRight}`};

  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.marginTop && `margin-top: ${props.marginTop}`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}`};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft}`};
  ${(props) => props.marginRight && `margin-right: ${props.marginRight}`};
  ${(props) =>
    !props.margin &&
    !props.marginTop &&
    !props.marginLeft &&
    !props.marginRight &&
    !props.marginBottom &&
    `margin: 0`};

  ${(props) => props.lineHeight && `line-height: ${props.lineHeight}`};

  ${(props) => props.widthSmall && `width: ${props.widthSmall}`};
  ${(props) =>
    props.widthLarge &&
    `@media ${props.theme.media.tablet} {
    width: ${props.widthLarge};
  }`}
`;
