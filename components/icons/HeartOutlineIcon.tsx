import { IconSvg, IconSvgProps } from "./IconSvg";

export const HeartOutlineIcon = ({
  iconHeight,
  iconWidth,
  iconColor,
}: IconSvgProps) => (
  <IconSvg
    iconHeight={iconHeight}
    iconWidth={iconWidth}
    iconColor={iconColor}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Like</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.4148 4.5C4.7668 4.5 4.1593 4.7505 3.7048 5.20575C2.7613 6.15075 2.7613 7.689 3.70555 8.6355L8.9998 13.9387L14.2948 8.6355C15.239 7.689 15.239 6.15075 14.2948 5.20575C13.3858 4.2945 11.7838 4.296 10.8748 5.20575L9.5308 6.552C9.2488 6.83475 8.7508 6.83475 8.4688 6.552L7.1248 5.205C6.6703 4.7505 6.06355 4.5 5.4148 4.5ZM8.99979 15.75C8.80104 15.75 8.60979 15.6712 8.46954 15.5295L2.64354 9.6945C1.11654 8.1645 1.11654 5.67525 2.64354 4.14525C3.38154 3.40725 4.36554 3 5.41479 3C6.46404 3 7.44879 3.40725 8.18604 4.14525L8.99979 4.9605L9.81354 4.146C10.5515 3.40725 11.5355 3 12.5855 3C13.634 3 14.6188 3.40725 15.356 4.14525C16.8838 5.67525 16.8838 8.1645 15.3568 9.6945L9.53079 15.5303C9.38979 15.6713 9.19929 15.75 8.99979 15.75Z"
      fill="#1A1A1A"
    />
    <mask
      id="mask0Hear"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="1"
      y="3"
      width="16"
      height="13"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.4148 4.5C4.7668 4.5 4.1593 4.7505 3.7048 5.20575C2.7613 6.15075 2.7613 7.689 3.70555 8.6355L8.9998 13.9387L14.2948 8.6355C15.239 7.689 15.239 6.15075 14.2948 5.20575C13.3858 4.2945 11.7838 4.296 10.8748 5.20575L9.5308 6.552C9.2488 6.83475 8.7508 6.83475 8.4688 6.552L7.1248 5.205C6.6703 4.7505 6.06355 4.5 5.4148 4.5ZM8.99979 15.75C8.80104 15.75 8.60979 15.6712 8.46954 15.5295L2.64354 9.6945C1.11654 8.1645 1.11654 5.67525 2.64354 4.14525C3.38154 3.40725 4.36554 3 5.41479 3C6.46404 3 7.44879 3.40725 8.18604 4.14525L8.99979 4.9605L9.81354 4.146C10.5515 3.40725 11.5355 3 12.5855 3C13.634 3 14.6188 3.40725 15.356 4.14525C16.8838 5.67525 16.8838 8.1645 15.3568 9.6945L9.53079 15.5303C9.38979 15.6713 9.19929 15.75 8.99979 15.75Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0Hear)">
      <rect width="18" height="18" />
    </g>
  </IconSvg>
);