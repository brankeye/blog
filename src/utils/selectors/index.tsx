import { pipe, prop, path, filter, map, curry, groupBy } from "ramda";
import { getMonth, getYear } from "date-fns";

export const getSiteMetadataProp = curry((propName, input) =>
  path(["data", "site", "siteMetadata", propName], input)
);
export const getTitle = getSiteMetadataProp("title");
export const getAuthor = getSiteMetadataProp("author");
export const getTwitter = getSiteMetadataProp("twitter");
export const getPosts = pipe(
  path(["data", "allMarkdownRemark", "edges"]),
  map(post => ({
    title: getPostTitle(post),
    date: getPostDate(post).toUpperCase(),
    slug: getPostSlug(post)
  }))
);
export const getPostTitle = path(["node", "frontmatter", "title"]);
export const getPostDate = path(["node", "frontmatter", "date"]);
export const getPostSlug = path(["node", "fields", "slug"]);
