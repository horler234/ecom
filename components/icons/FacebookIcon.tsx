import { IconSvg, IconSvgProps } from "./IconSvg";

export const FacebookIcon = ({
  iconHeight,
  iconWidth,
  iconColor,
}: IconSvgProps) => (
  <IconSvg
    iconHeight={iconHeight}
    iconWidth={iconWidth}
    iconColor={iconColor}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Facebook</title>
    <path d="M18.6667 18H22L23.3333 12.6666H18.6667V9.99996C18.6667 8.62663 18.6667 7.33329 21.3333 7.33329H23.3333V2.85329C22.8987 2.79596 21.2573 2.66663 19.524 2.66663C15.904 2.66663 13.3333 4.87596 13.3333 8.93329V12.6666H9.33334V18H13.3333V29.3333H18.6667V18Z" />
  </IconSvg>
);
