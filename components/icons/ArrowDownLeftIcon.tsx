import { IconSvg, IconSvgProps } from "./IconSvg";

export const ArrowDownLeftIcon = ({
  iconHeight,
  iconWidth,
  iconColor,
}: IconSvgProps) => (
  <IconSvg
    iconHeight={iconHeight}
    iconWidth={iconWidth}
    iconColor={iconColor}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Down-Left</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.707 0.292998C11.316 -0.0980018 10.684 -0.0980018 10.293 0.292998L2 8.586V3C2 2.448 1.553 2 1 2C0.447 2 0 2.448 0 3V11C0 11.552 0.447 12 1 12H9C9.553 12 10 11.552 10 11C10 10.448 9.553 10 9 10H3.414L11.707 1.707C12.098 1.316 12.098 0.683998 11.707 0.292998Z"
    />
  </IconSvg>
);
