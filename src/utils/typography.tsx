import Typography from "typography";
import githubTheme from "typography-theme-github";
import {
  backgroundColor,
  color,
  brighterColor,
  linkColor,
  border,
  borderLight,
  borderHeavy
} from "./theme";

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  body: {
    backgroundColor,
    color
  },
  h1: {
    color,
    borderBottom: "none"
  },
  h2: {
    color,
    borderBottom: borderLight
  },
  h6: {
    color
  },
  a: {
    color: linkColor,
    textDecoration: "none"
  },
  b: {
    color: brighterColor
  },
  strong: {
    color: brighterColor
  },
  hr: {
    color: brighterColor
  },
  blockquote: {
    color,
    borderLeft: borderHeavy
  }
});

const typography = new Typography(githubTheme);

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
