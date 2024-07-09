import { create,themes } from '@storybook/theming'
import logo from '../public/logo-vr.svg';

export default create({
  base: themes.dark,
  colorPrimary: '#ffffff',
  colorSecondary: '#34C149',

  brandTitle: 'VR challenge - Design System',
  brandUrl: 'https://www.vr.com.br/',
  brandImage: logo,
})
