import { IconSvg, IconSvgProps } from "./IconSvg";

export const HeartFillIcon = ({
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
    <title>Unlike</title>
    <g id="Icon/Fill/heart">
      <path
        id="MaskHeart"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21C11.734 21 11.48 20.895 11.292 20.706L3.52499 12.926C1.48899 10.886 1.48899 7.567 3.52499 5.527C4.50799 4.543 5.82099 4 7.21999 4C8.61899 4 9.93199 4.543 10.915 5.527L12 6.614L13.084 5.528C14.068 4.543 15.381 4 16.78 4C18.179 4 19.492 4.543 20.475 5.527C22.511 7.567 22.511 10.886 20.476 12.926L12.708 20.707C12.52 20.895 12.266 21 12 21Z"
      />
      <mask
        id="mask0Heart"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="1"
        y="4"
        width="22"
        height="17"
      >
        <path
          id="Mask_2Heart"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 21C11.734 21 11.48 20.895 11.292 20.706L3.52499 12.926C1.48899 10.886 1.48899 7.567 3.52499 5.527C4.50799 4.543 5.82099 4 7.21999 4C8.61899 4 9.93199 4.543 10.915 5.527L12 6.614L13.084 5.528C14.068 4.543 15.381 4 16.78 4C18.179 4 19.492 4.543 20.475 5.527C22.511 7.567 22.511 10.886 20.476 12.926L12.708 20.707C12.52 20.895 12.266 21 12 21Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0Heart)">
        <g id="&#240;&#159;&#142;&#168; Color">
          <rect id="Base" width="24" height="24" />
        </g>
      </g>
    </g>
  </IconSvg>
);
