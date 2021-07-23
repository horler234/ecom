import { IconSvg, IconSvgProps } from "./IconSvg";

export const ArrowLeftIcon = ({
  iconHeight,
  iconWidth,
  iconColor,
}: IconSvgProps) => (
  <IconSvg
    iconHeight={iconHeight}
    iconWidth={iconWidth}
    iconColor={iconColor}
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Left</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 6H3.135L6.768 1.64C7.122 1.216 7.064 0.585001 6.64 0.232001C6.215 -0.121999 5.585 -0.0639994 5.232 0.360001L0.232 6.36C0.193 6.407 0.173 6.462 0.144 6.514C0.12 6.556 0.091 6.592 0.073 6.638C0.028 6.753 0.001 6.874 0.001 6.996C0.001 6.997 0 6.999 0 7C0 7.001 0.001 7.003 0.001 7.004C0.001 7.126 0.028 7.247 0.073 7.362C0.091 7.408 0.12 7.444 0.144 7.486C0.173 7.538 0.193 7.593 0.232 7.64L5.232 13.64C5.43 13.877 5.714 14 6 14C6.226 14 6.453 13.924 6.64 13.768C7.064 13.415 7.122 12.784 6.768 12.36L3.135 8H15C15.552 8 16 7.552 16 7C16 6.448 15.552 6 15 6Z"
    />
  </IconSvg>
);
