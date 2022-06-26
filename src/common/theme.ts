import { alpha, createTheme, Palette, ThemeOptions } from '@mui/material';
import { CommonColors } from '@mui/material/styles/createPalette';

interface BorderRadius {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

interface ColorPalette {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
}

interface ICommonColors extends CommonColors {
  purple: ColorPalette;
  blue: ColorPalette;
  green: ColorPalette;
  yellow: ColorPalette;
}

interface IPalette extends Palette {
  common: ICommonColors;
}

interface IThemeOptions extends ThemeOptions {
  borderRadius: BorderRadius;
  palette: IPalette;
}

const colors = {
  purple100: '#f4ebfa',
  purple200: '#e0d4fA',
  purple300: '#d5b8ff',
  purple400: '#a288e3',
  purple500: '#715bb1',
  blue100: '#cdf4ff',
  blue200: '#9eeaff',
  blue300: '#5ddcff',
  blue400: '#5880F5',
  blue500: '#4e00c2',
  lighBlue100: '#ebf0fa',
  lightBlue200: '#d4eefa',
  lightBlue300: '#b8ebff',
  lightBlue400: '#49c9e4',
  lightBlue500: '#4a8fbd',
  green100: '#ebffeb',
  green200: '#cbffcb',
  green300: '#7AFF78',
  green400: '#00FF19',
  green500: '#04C200',
  yellow100: '#fff1Ce',
  yellow200: '#ffe7ae',
  yellow300: '#ffeb80',
  yellow400: '#f9Db70',
  yellow500: '#FFB400',
  red100: '#fad2d5',
  red200: '#f4a4aa',
  red300: '#e84855',
  red400: '#da4450',
  red500: '#af3640',
  neutral800: '#3a3a6e',
  neutral900: '#212042',
  black: '#02182b',
  white: '#fff',
};

const shadows = {
  none: `none`,
  low: `0px 2px 8px 0px ${alpha(colors.black, 0.25)}`,
  green: {
    shadowLight: `0px 0px 25px ${colors.green300}`,
    shadowDark: `0px 0px 50px ${colors.green500}`,
  },
  yellow: {
    shadowLight: `0px 0px 25px ${colors.yellow300}`,
    shadowDark: `0px 0px 50px ${colors.yellow500}`,
  },
  blue: {
    shadowLight: `0px 0px 25px ${colors.blue300}`,
    shadowDark: `0px 0px 50px ${colors.blue500}`,
  },
};

const borderRadius = {
  small: 2,
  medium: 4,
  large: 8,
  xlarge: 16,
};

const breakpoints = {
  lg: 1024,
  xl: 1440,
};

const defaultTheme = createTheme({
  spacing: 4,
  breakpoints,
  borderRadius,
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "'Kanit', sans-serif",
    h1: {
      fontSize: 32,
      lineHeight: 1.25,
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 600,
    },
    h2: {
      fontSize: 24,
      lineHeight: 1.33,
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 600,
    },
    h3: {
      fontSize: 20,
      lineHeight: 1.2,
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 600,
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 1.5,
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 400,
    },
    body: {
      fontSize: 16,
      lineHeight: 1.25,
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 400,
    },
    bodyBold: {
      fontSize: 16,
      lineHeight: 1.25,
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 600,
    },
    paragraphSmall: {
      fontSize: 14,
      lineHeight: 1.43,
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 400,
    },
    small: {
      fontSize: 14,
      lineHeight: 1.14,
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 400,
    },
    smallBold: {
      fontSize: 14,
      lineHeight: 1.14,
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 600,
    },
    xSmall: {
      fontSize: 12,
      lineHeight: 1.3,
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 400,
    },
    xSmallBold: {
      fontSize: 12,
      lineHeight: 1.3,
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 600,
    },
    tiny: {
      fontSize: 10,
      lineHeight: 1.2,
      fontFamily: "'Kanit', sans-serif",
      fontWeight: 400,
    },
  },
} as Partial<IThemeOptions>);

const theme = createTheme({
  spacing: 4,
  breakpoints,
  borderRadius,
  shape: {
    borderRadius: 8,
  },
  palette: {
    ...defaultTheme.palette,
    background: {
      default: colors.neutral800,
      paper: '#fff',
    },
    text: {
      primary: colors.white,
      secondary: colors.black,
      disabled: '',
    },
    primary: {
      main: colors.purple400,
      light: colors.purple300,
      dark: colors.purple500,
      contrastText: colors.black,
    },
    secondary: {
      main: colors.blue400,
      light: colors.blue300,
      dark: colors.blue500,
      contrastText: colors.white,
    },
    info: {
      main: colors.lightBlue400,
      light: colors.lightBlue300,
      dark: colors.lightBlue500,
      contrastText: colors.white,
    },
    success: {
      main: colors.green400,
      light: colors.green300,
      dark: colors.green500,
      contrastText: colors.white,
    },
    warning: {
      main: colors.yellow400,
      light: colors.yellow300,
      dark: colors.yellow500,
      contrastText: colors.white,
    },
    neutral: {
      main: 'rgba(255, 255, 255, 0)',
      contrastText: colors.purple300,
    },
    error: {
      main: colors.red400,
      light: colors.red300,
      dark: colors.red500,
      contrastText: colors.white,
    },
    common: {
      purple: {
        100: colors.purple100,
        200: colors.purple200,
        300: colors.purple300,
        400: colors.purple400,
        500: colors.purple500,
      },
      green: {
        100: colors.green100,
        200: colors.green200,
        300: colors.green300,
        400: colors.green400,
        500: colors.green500,
      },
      yellow: {
        100: colors.yellow100,
        200: colors.yellow200,
        300: colors.yellow300,
        400: colors.yellow400,
        500: colors.yellow500,
      },
      blue: {
        100: colors.blue100,
        200: colors.blue200,
        300: colors.blue300,
        400: colors.blue400,
        500: colors.blue500,
      },
      black: colors.black,
      white: colors.white,
    },
  },
  typography: defaultTheme.typography,
  shadows: [
    'none',
    shadows.low,
    shadows.green.shadowLight,
    shadows.green.shadowDark,
    shadows.yellow.shadowLight,
    shadows.yellow.shadowDark,
    shadows.blue.shadowLight,
    shadows.blue.shadowDark,
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
} as IThemeOptions);

export default theme;
