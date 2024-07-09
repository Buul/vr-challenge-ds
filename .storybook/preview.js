import React from "react";
import { themes } from '@storybook/theming'
import themeDefault from '../src/theme/ThemeDefault';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/globalStyles';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
   docs: {
    theme: themes.normal,
  },
  controls: { expanded: true }
}



