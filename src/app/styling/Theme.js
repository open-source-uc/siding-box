import React from "react";
import { ThemeProvider } from "styled-components";

export const fonts = {
  primary: "Helvetica, Arial, sans-serif",
};

export const palette = {
  primary: ["#D32F2F", "#F44336", "#F8877F", "#FFCDD2"],
  grayscale: ["#000000", "#404040", "#808080", "#FFFFFF"],
};

const theme = {
  fonts,
  palette,
};

const Theme = props => <ThemeProvider theme={theme} {...props} />;

export default Theme;
