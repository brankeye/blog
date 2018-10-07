import { pipe, path, filter, map, curry } from "ramda";

export const getSiteMetadataProp = curry((propName, input) =>
  path(["data", "site", "siteMetadata", propName], input)
);
export const getTitle = getSiteMetadataProp("title");
export const getAuthor = getSiteMetadataProp("author");
export const getTwitter = getSiteMetadataProp("twitter");
export const getPosts = pipe(
  path(["data", "allMarkdownRemark", "edges"]),
  filter(post => post.node.frontmatter.title.length > 0)
);
export const getPostTitle = path(["node", "frontmatter", "title"]);
export const getPostSlug = path(["node", "fields", "slug"]);
