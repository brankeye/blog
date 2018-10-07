export const backgroundColor = "hsla(0, 0%, 18%, 1)";
export const color = "hsla(0, 0%, 95%, 0.95)";
export const brighterColor = "hsla(0, 0%, 100%, 0.95)";
export const linkColor = "hsla(195, 90%, 60%, 0.95)";

const getBorder = size => `${size}px solid ${brighterColor}`;
export const borderLight = getBorder(1);
export const border = getBorder(2);
export const borderHeavy = getBorder(3);

interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

const breakpoints: Breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200
};

export const getMediaQuery = bp => `@media (min-width: ${breakpoints[bp]}px)`;

export const mq = {
  xs: getMediaQuery("xs"),
  sm: getMediaQuery("sm"),
  md: getMediaQuery("md"),
  lg: getMediaQuery("lg")
};
