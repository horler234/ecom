import { colors } from "./colors";
import {typography} from "./typography";

/**
 * AppTheme is the theme given to styled-components
 * 'provider' in _app.tsx so that styling can be consistent.
 */
export const AppTheme = {
  name: "AppTheme",
  //   isLightTheme: true,
  colors,
  typography,
};
