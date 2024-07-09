/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'

import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

import themeDefault from '../src/themes/themeDefault'

const AllTheProviders = ({ children }) => (
  <ThemeProvider theme={themeDefault}>{children}</ThemeProvider>
)

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
