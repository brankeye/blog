import Typography from "typography";
import githubTheme from "typography-theme-github";

const backgroundColor = "hsla(0, 0%, 18%, 1)";
const color = "hsla(0, 0%, 95%, 0.95)";
const brighterColor = "hsla(0, 0%, 100%, 0.95)";
const linkColor = "hsla(195, 90%, 60%, 0.95)";
const border = size => `${size}px solid ${brighterColor}`;

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  body: {
    backgroundColor,
    color
  },
  h1: {
    borderBottom: border(1)
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
  blockquote: {
    color,
    borderLeft: border(4)
  }
});

const typography = new Typography(githubTheme);

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
