import { IconSvg, IconSvgProps } from "./IconSvg";

export const ArrowDownRightIcon = ({
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
    <title>Down-Right</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 2C10.447 2 10 2.448 10 3V8.586L1.707 0.292998C1.316 -0.0980018 0.683998 -0.0980018 0.292998 0.292998C-0.0980018 0.683998 -0.0980018 1.316 0.292998 1.707L8.586 10H3C2.447 10 2 10.448 2 11C2 11.552 2.447 12 3 12H11C11.553 12 12 11.552 12 11V3C12 2.448 11.553 2 11 2Z"
    />
  </IconSvg>
);
