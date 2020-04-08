import { colors } from './variables';

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    border: string;
  };
}

export const light: Theme = {
  colors: {
    primary: colors.gray200,
    secondary: colors.gray800,
    border: colors.gray400
  }
};

export const dark: Theme = {
  colors: {
    primary: colors.gray900,
    secondary: colors.gray400,
    border: colors.gray800
  }
};

export type ThemeType = typeof light | typeof dark;
