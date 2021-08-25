import { IconSvg, IconSvgProps } from "./IconSvg";

export const PinIcon = ({ iconHeight, iconWidth, iconColor }: IconSvgProps) => (
  <IconSvg
    iconHeight={iconHeight}
    iconWidth={iconWidth}
    iconColor={iconColor}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Pin</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 8C11.173 8 10.5 8.673 10.5 9.5C10.5 10.327 11.173 11 12 11C12.827 11 13.5 10.327 13.5 9.5C13.5 8.673 12.827 8 12 8ZM12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13ZM12 2C7.589 2 4 5.554 4 9.923C4 15.397 11.049 21.502 11.349 21.759C11.537 21.92 11.768 22 12 22C12.232 22 12.463 21.92 12.651 21.759C12.951 21.502 20 15.397 20 9.923C20 5.554 16.411 2 12 2Z"
    />
    <mask
      id="mask0Pin"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="4"
      y="2"
      width="16"
      height="20"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8C11.173 8 10.5 8.673 10.5 9.5C10.5 10.327 11.173 11 12 11C12.827 11 13.5 10.327 13.5 9.5C13.5 8.673 12.827 8 12 8ZM12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13ZM12 2C7.589 2 4 5.554 4 9.923C4 15.397 11.049 21.502 11.349 21.759C11.537 21.92 11.768 22 12 22C12.232 22 12.463 21.92 12.651 21.759C12.951 21.502 20 15.397 20 9.923C20 5.554 16.411 2 12 2Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0Pin)">
      <rect width="24" height="24" />
    </g>
  </IconSvg>
);
