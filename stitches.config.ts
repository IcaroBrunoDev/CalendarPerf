import {createStitches} from 'stitches-native';

export const {
  styled,
  css,
  theme,
  createTheme,
  useTheme,
  ThemeProvider,
  config,
} = createStitches({
  theme: {
    colors: {
      fab: '#383838',
      fabActive: '#4285F4',
      text: '#000',
      borderColor: '#2D4356',
      backgroundColor: '#FFF',
    },
  },
});

export const dark = createTheme({
  colors: {
    fab: '#383838',
    fabActive: '#4285F4',
    text: '#FFF',
    borderColor: '#FFF',
    backgroundColor: '#1E1E1E',
  },
});
