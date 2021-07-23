import { IconSvg, IconSvgProps } from "./IconSvg";

export const ArrowUpLeftIcon = ({
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
    <title>Up-Left</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.707 10.293L3.418 2.004L9.001 2C9.553 2 10 1.551 10 0.999C10 0.447 9.552 0 9 0H8.999L1.049 0.006C0.499 0.007 0.0540001 0.451 0.0500001 1L5.3391e-08 8.994C-0.00399995 9.546 0.441 9.997 0.994 10H1C1.55 10 1.996 9.556 2 9.006L2.035 3.449L10.293 11.707C10.488 11.902 10.744 12 11 12C11.256 12 11.512 11.902 11.707 11.707C12.098 11.316 12.098 10.684 11.707 10.293Z"
    />
  </IconSvg>
);
