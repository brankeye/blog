import Typography from "typography";
import githubTheme from "typography-theme-github";
import { backgroundColor, color, brighterColor, linkColor } from "./theme";

const border = size => `${size}px solid ${brighterColor}`;

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  body: {
    backgroundColor,
    color
  },
  h1: {
    borderBottom: border(3)
  },
  h2: {
    borderBottom: border(1)
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
    borderLeft: border(4)
  }
});

const typography = new Typography(githubTheme);

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
