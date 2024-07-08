import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import GlobalStyles from '../src/styles/globalStyles';

import themeDefault from '../src/theme/ThemeDefault';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: themeDefault,
    },
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];
