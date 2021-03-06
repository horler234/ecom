import { IconSvg, IconSvgProps } from "./IconSvg";

export const EmailIcon = ({
  iconHeight,
  iconWidth,
  iconColor,
}: IconSvgProps) => (
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
    <title>Email</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.0064 6L12.5014 10.468C12.1944 10.643 11.8184 10.643 11.5114 10.468L5.00641 6H19.0064ZM19.0064 4H5.00641C3.35241 4 2.00641 5.346 2.00641 7V17C2.00641 18.654 3.35241 20 5.00641 20H19.0064C20.6604 20 22.0064 18.654 22.0064 17V7C22.0064 5.346 20.6604 4 19.0064 4Z"
    />
    <mask
      id="mask0Mail"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="2"
      y="4"
      width="21"
      height="16"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.0064 6L12.5014 10.468C12.1944 10.643 11.8184 10.643 11.5114 10.468L5.00641 6H19.0064ZM19.0064 4H5.00641C3.35241 4 2.00641 5.346 2.00641 7V17C2.00641 18.654 3.35241 20 5.00641 20H19.0064C20.6604 20 22.0064 18.654 22.0064 17V7C22.0064 5.346 20.6604 4 19.0064 4Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0Mail)">
      <rect width="24" height="24" />
    </g>
  </IconSvg>
);
