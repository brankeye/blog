module.exports = {
  siteMetadata: {
    name: "Brandon Keyes",
    tagline: "A very frigid, very northern tech blog"
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/config/typography.js"
      }
    }
  ]
};
