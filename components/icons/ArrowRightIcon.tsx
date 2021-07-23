import { IconSvg, IconSvgProps } from "./IconSvg";

export const ArrowRightIcon = ({
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
    <title>Right</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 8H12.865L9.232 12.36C8.878 12.784 8.936 13.415 9.36 13.768C9.785 14.122 10.415 14.064 10.769 13.64L15.769 7.64C15.808 7.593 15.827 7.538 15.856 7.486C15.88 7.444 15.909 7.408 15.927 7.362C15.972 7.247 15.999 7.126 15.999 7.004C15.999 7.003 16 7.001 16 7C16 6.999 15.999 6.997 15.999 6.996C15.999 6.874 15.972 6.753 15.927 6.638C15.909 6.592 15.88 6.556 15.856 6.514C15.827 6.462 15.808 6.407 15.769 6.36L10.769 0.36C10.57 0.123 10.286 0 10 0C9.774 0 9.547 0.076 9.36 0.232C8.936 0.585 8.878 1.216 9.232 1.64L12.865 6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8Z"
    />
  </IconSvg>
);
