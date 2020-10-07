// styled-components.ts
import * as styledComponents from 'styled-components/native';

import { lightTheme } from '../themes';

const {
  default: styled,
  css,
  ThemeProvider,
  ThemeContext,
  withTheme,
} = (styledComponents as unknown) as styledComponents.ReactNativeThemedStyledComponentsModule<
  typeof lightTheme
>;

export { css, ThemeProvider, withTheme, ThemeContext };
export default styled;
