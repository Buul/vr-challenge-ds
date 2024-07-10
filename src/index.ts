import toast from 'react-hot-toast';

// components
export { Icon, Typography } from './components/DataDisplay';
export { Loading, Toast, Modal } from './components/Feedback';
export { Button, IconButton } from './components/Form';

// styles
export { default as GlobalStyle } from './styles/globalStyles';
export { ThemeDefault } from './theme/ThemeDefault';
export type { ThemeType } from './theme/Theme.types';

// utils
export { default as breakpoints } from './utils/mediaQueries/media';

// functions
export { toast };
