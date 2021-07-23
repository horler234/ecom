import { IconSvg, IconSvgProps } from "./IconSvg";

export const ArrowDownIcon = ({
  iconHeight,
  iconWidth,
  iconColor,
}: IconSvgProps) => (
  <IconSvg
    iconHeight={iconHeight}
    iconWidth={iconWidth}
    iconColor={iconColor}
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Down</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7682 9.36C13.4142 8.936 12.7842 8.878 12.3602 9.232L8.00023 12.865V1C8.00023 0.448 7.55224 0 7.00024 0C6.44824 0 6.00024 0.448 6.00024 1V12.865L1.64023 9.232C1.21523 8.878 0.585235 8.936 0.232235 9.36C-0.121765 9.784 -0.0647651 10.415 0.360235 10.768L6.36023 15.768C6.40723 15.808 6.46323 15.827 6.51523 15.857C6.55623 15.881 6.59223 15.909 6.63723 15.927C6.75423 15.973 6.87624 16 7.00024 16C7.12424 16 7.24623 15.973 7.36323 15.927C7.40824 15.909 7.44423 15.881 7.48523 15.857C7.53723 15.827 7.59324 15.808 7.64023 15.768L13.6402 10.768C14.0642 10.415 14.1222 9.784 13.7682 9.36Z"
    />
  </IconSvg>
);
