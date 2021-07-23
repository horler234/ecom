import 'styled-components';
import { AppTheme } from './theme/AppTheme';

/**
 * This file tells TypeScript what the AppTheme type is,
 * so that all styled-components have a typed 'theme' prop.
 */
type MyTheme = typeof AppTheme

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}