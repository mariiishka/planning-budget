import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/common/theme';

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story {...context} />
    </ThemeProvider>

  );
};
export const decorators = [withThemeProvider];