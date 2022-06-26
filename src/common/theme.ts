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
  neutral600: '#535e69',
  neutral500: '#49505A',
  neutral700: '#74788f',
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
  red: {
    shadowLight: `0px 0px 25px ${colors.red300}`,
    shadowDark: `0px 0px 50px ${colors.red500}`,
  },
  purple: {
    shadowLight: `0px 0px 25px ${colors.purple300}`,
    shadowDark: `0px 0px 50px ${colors.purple500}`,
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
    shadows.low,
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    shadows.green.shadowLight,
    shadows.green.shadowDark,
    shadows.yellow.shadowLight,
    shadows.yellow.shadowDark,
    shadows.blue.shadowDark,
    shadows.blue.shadowLight,
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
  components: {
    MuiButton: {
      variants: [
        {
          props: { color: 'primary', variant: 'contained' },
          style: {
            backgroundColor: colors.purple300,
            '&:hover': {
              backgroundColor: colors.purple400,
            },
            '&:disabled': {
              color: colors.black,
              backgroundColor: colors.purple300,
            },
          },
        },
        {
          props: { color: 'primary', variant: 'outlined' },
          style: {
            color: colors.purple300,
            backgroundColor: 'transparent',
            borderColor: colors.purple300,
            '&:hover': {
              filter: `drop-shadow(${shadows.purple.shadowLight}) drop-shadow(${shadows.purple.shadowDark})`,
            },
            '&:disabled': {
              color: colors.purple300,
              borderColor: colors.purple300,
            },
          },
        },
        {
          props: { color: 'primary', variant: 'text' },
          style: {
            color: colors.purple300,
            '&:hover': {
              color: colors.purple400,
              borderBottomColor: colors.purple400,
              backgroundColor: `${alpha(colors.purple400, 0.25)}`,
            },
            '&:disabled': {
              color: colors.purple400,
              borderBottomColor: colors.purple400,
              backgroundColor: 'transparent',
            },
          },
        },
        {
          props: { color: 'success', variant: 'contained' },
          style: {
            color: colors.black,
            '&:disabled': {
              color: colors.black,
              backgroundColor: colors.green400,
            },
          },
        },
        {
          props: { color: 'success', variant: 'outlined' },
          style: {
            '&:hover': {
              filter: `drop-shadow(${shadows.green.shadowLight}) drop-shadow(${shadows.green.shadowDark})`,
            },
            '&:disabled': {
              color: colors.green400,
              borderColor: colors.green400,
            },
          },
        },
        {
          props: { color: 'success', variant: 'text' },
          style: {
            color: colors.green400,
            '&:hover': {
              color: colors.green400,
              borderBottomColor: colors.green400,
              backgroundColor: `${alpha(colors.green400, 0.25)}`,
            },
            '&:disabled': {
              color: colors.green400,
              borderBottomColor: colors.green400,
              backgroundColor: 'transparent',
            },
          },
        },
        {
          props: { color: 'error', variant: 'contained' },
          style: {
            color: colors.white,
            backgroundColor: colors.red300,
            '&:hover': {
              backgroundColor: colors.red400,
            },
            '&:disabled': {
              color: colors.white,
              backgroundColor: colors.red300,
            },
          },
        },
        {
          props: { color: 'error', variant: 'outlined' },
          style: {
            '&:hover': {
              filter: `drop-shadow(${shadows.red.shadowLight}) drop-shadow(${shadows.red.shadowDark})`,
            },
            '&:disabled': {
              color: colors.red400,
              borderColor: colors.red400,
            },
          },
        },
        {
          props: { color: 'error', variant: 'text' },
          style: {
            color: colors.red300,
            backgroundColor: 'transparent',
            '&:hover': {
              color: colors.red400,
              borderBottomColor: colors.red400,
              backgroundColor: `${alpha(colors.red400, 0.25)}`,
            },
            '&:disabled': {
              color: colors.red300,
              borderBottomColor: colors.red300,
              backgroundColor: 'transparent',
            },
          },
        },
        {
          props: { color: 'info', variant: 'contained' },
          style: {
            '&:disabled': {
              color: colors.white,
              backgroundColor: colors.lightBlue400,
            },
          },
        },
        {
          props: { color: 'info', variant: 'outlined' },
          style: {
            '&:hover': {
              filter: `drop-shadow(${shadows.blue.shadowLight}) drop-shadow(${shadows.blue.shadowDark})`,
            },
            '&:disabled': {
              color: colors.lightBlue400,
              borderColor: colors.lightBlue400,
            },
          },
        },
        {
          props: { color: 'info', variant: 'text' },
          style: {
            color: colors.lightBlue300,
            '&:hover': {
              color: colors.lightBlue400,
              borderBottomColor: colors.lightBlue400,
              backgroundColor: `${alpha(colors.lightBlue400, 0.25)}`,
            },
            '&:disabled': {
              color: colors.lightBlue300,
              borderBottomColor: colors.lightBlue300,
              backgroundColor: 'transparent',
            },
          },
        },
        {
          props: { color: 'warning', variant: 'contained' },
          style: {
            '&:disabled': {
              color: colors.white,
              backgroundColor: colors.yellow400,
            },
          },
        },
        {
          props: { color: 'warning', variant: 'outlined' },
          style: {
            '&:hover': {
              filter: `drop-shadow(${shadows.yellow.shadowLight}) drop-shadow(${shadows.yellow.shadowDark})`,
            },
            '&:disabled': {
              color: colors.yellow400,
              borderColor: colors.yellow400,
            },
          },
        },
        {
          props: { color: 'warning', variant: 'text' },
          style: {
            color: colors.yellow300,
            '&:hover': {
              color: colors.yellow400,
              borderBottomColor: colors.yellow400,
              backgroundColor: `${alpha(colors.yellow400, 0.25)}`,
            },
            '&:disabled': {
              color: colors.yellow300,
              borderBottomColor: colors.yellow300,
              backgroundColor: 'transparent',
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            padding: 0,
            borderRadius: 0,
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            borderBottomColor: 'transparent',
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          cursor: 'pointer',
          fontSize: 16,
          lineHeight: 1.5,
          fontFamily: "'Kanit', sans-serif",
          fontWeight: 600,
          paddingTop: defaultTheme.spacing(3),
          paddingBottom: defaultTheme.spacing(3),
          paddingLeft: defaultTheme.spacing(5),
          paddingRight: defaultTheme.spacing(5),
          '&:disabled': {
            opacity: '20%',
          },
        },
      },
    },
  },
} as IThemeOptions);

export default theme;
