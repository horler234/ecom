import { IconSvg, IconSvgProps } from "./IconSvg";

export const CartIcon = ({
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
    <title>Cart</title>
    <g id="Icon/Fill/shopping-cart">
      <path
        id="Mask-Cart"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.083 6.9482C20.716 6.3542 20.08 6.0002 19.382 6.0002H6.582L5.965 3.7372C5.846 3.3022 5.451 3.0002 5 3.0002H3C2.447 3.0002 2 3.4482 2 4.0002C2 4.5522 2.447 5.0002 3 5.0002H4.236L7.035 15.2632C7.154 15.6982 7.549 16.0002 8 16.0002H17C17.379 16.0002 17.725 15.7862 17.895 15.4472L21.171 8.8942C21.483 8.2692 21.45 7.5422 21.083 6.9482ZM7.5 18C6.672 18 6 18.671 6 19.5C6 20.329 6.672 21 7.5 21C8.328 21 9 20.329 9 19.5C9 18.671 8.328 18 7.5 18ZM16 19.5C16 18.671 16.672 18 17.5 18C18.328 18 19 18.671 19 19.5C19 20.329 18.328 21 17.5 21C16.672 21 16 20.329 16 19.5Z"
      />
      <mask
        id="mask0cart"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="2"
        y="3"
        width="20"
        height="18"
      >
        <path
          id="Mask_2cart"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.083 6.9482C20.716 6.3542 20.08 6.0002 19.382 6.0002H6.582L5.965 3.7372C5.846 3.3022 5.451 3.0002 5 3.0002H3C2.447 3.0002 2 3.4482 2 4.0002C2 4.5522 2.447 5.0002 3 5.0002H4.236L7.035 15.2632C7.154 15.6982 7.549 16.0002 8 16.0002H17C17.379 16.0002 17.725 15.7862 17.895 15.4472L21.171 8.8942C21.483 8.2692 21.45 7.5422 21.083 6.9482ZM7.5 18C6.672 18 6 18.671 6 19.5C6 20.329 6.672 21 7.5 21C8.328 21 9 20.329 9 19.5C9 18.671 8.328 18 7.5 18ZM16 19.5C16 18.671 16.672 18 17.5 18C18.328 18 19 18.671 19 19.5C19 20.329 18.328 21 17.5 21C16.672 21 16 20.329 16 19.5Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0cart)">
        <g id="&#240;&#159;&#142;&#168; Color">
          <rect id="Base" width="24" height="24" />
        </g>
      </g>
    </g>
  </IconSvg>
);
