import { IconSvg, IconSvgProps } from "./IconSvg";

export const ArrowFillUpIcon = ({
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
    <title>Scroll Up</title>
    <g id="Icon/Fill/arrow-up">
      <path
        id="MaskArrowFill"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2129 16H7.7869C7.1139 16 6.5069 15.598 6.2019 14.951C5.8569 14.218 5.9569 13.351 6.4599 12.741L10.6739 7.64199C11.3459 6.82499 12.6539 6.82499 13.3259 7.64199L17.5389 12.74C18.0429 13.351 18.1439 14.218 17.7979 14.951C17.4929 15.598 16.8859 16 16.2129 16Z"
      />
      <mask
        id="mask0ArrowFill"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="5"
        y="7"
        width="14"
        height="9"
      >
        <path
          id="Mask_2ArrowFill"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.2129 16H7.7869C7.1139 16 6.5069 15.598 6.2019 14.951C5.8569 14.218 5.9569 13.351 6.4599 12.741L10.6739 7.64199C11.3459 6.82499 12.6539 6.82499 13.3259 7.64199L17.5389 12.74C18.0429 13.351 18.1439 14.218 17.7979 14.951C17.4929 15.598 16.8859 16 16.2129 16Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0ArrowFill)">
        <g id="&#240;&#159;&#142;&#168; Color">
          <rect id="Base" width="24" height="24" />
        </g>
      </g>
    </g>
  </IconSvg>
);
