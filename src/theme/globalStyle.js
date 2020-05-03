import { createGlobalStyle } from "styled-components";
import * as palette from "./_variables.js";

const device = {
  phone: `(max-width: ${palette.phone})`,
  tablet: `(min-width: ${palette.phone + 1}) and (max-width: ${
    palette.tablet
  })`,
  fullHD: `(min-width: ${palette.fullHD})`,
};

const common = {
  fontSizeSmall: palette.fontSizeSmall,
  fontSizeMedium: palette.fontSizeMedium,
  fontSizeBig: palette.fontSizeBig,
  borderRadius: palette.borderRadius,
  inputFontSize: palette.inputFontSize,
  contentMaxWidth: palette.contentMaxWidth,
  contentMinWidth: palette.contentMinWidth,
};

export const dott = {
  primary: "#9b26b6",
  secondary: palette.secondary,
  danger: "#f16623",
  light: palette.ColorLight,
  dark: palette.ColorDark,
  inputBackgroundColor: palette.inputBackgroundColor,
  logo: "brightness(0%) saturate(0%) contrast(1000%) invert(100%)",
  ...common,
  ...device,
};

export const blackFriday = {
  primary: "#000",
  secondary: palette.secondary,
  danger: "#eb238e",
  light: palette.ColorLight,
  dark: palette.ColorDark,
  inputBackgroundColor: palette.inputBackgroundColor,
  ...common,
  ...device,
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family==PT+Sans:400,900|Roboto:400,900');

  body {
    padding: 0;
    margin: 0;
    font-family: 'PT Sans', sans-serif;
  }

  h1 {
    font-size: ${palette.fontSizeBig}
  }

  * { box-sizing: border-box; }
`;
