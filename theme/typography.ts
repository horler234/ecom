/**
 * sizes are font-sizes
 */
enum sizes {
  h1 = "88px",
  h2 = "80px",
  navigation = "48px",
  h3 = "32px",
  subtitle1 = "24px",
  subtitle2 = "16px",
  button = "16px",
  body16 = "16px",
  link = "12px",
  label = "12px",
}

/**
 * weights are font-weights
 */
enum weights {
  black = "900",
  bold = "700",
  mediumMontserrat = "500",
  mediumOpenSans = "400",
}

/**
 * heights are line-heights
 */
enum heights {
  h1 = "105.69px",
  h2 = "96px",
  navigation = "48px",
  h3 = "32px",
  subtitle1 = "24px",
  subtitle2 = "19.2px",
  button = "16px",
  body16 = "24.05px",
  link = "12px",
  label = "14.4px",
}

/**
 * fontFamily are font-families
 */
enum fontFamily {
  montserrat = `'Montserrat', sans-serif`,
  openSans = `'Open Sans', sans-serif`,
}

export const typography = {
  fontFamily,
  sizes,
  weights,
  heights,
};
