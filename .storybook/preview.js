import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './style.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          bgcolor: 'background.default',
        }}
      >
        <Story {...context} />
      </Box>

    </ThemeProvider>

  );
};
export const decorators = [withThemeProvider];