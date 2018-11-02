import { pipe, prop, path, filter, map, curry } from "ramda";
import { getMonth, getYear } from "date-fns";

export const getSiteMetadataProp = curry((propName, input) =>
  path(["data", "site", "siteMetadata", propName], input)
);
export const getTitle = getSiteMetadataProp("title");
export const getAuthor = getSiteMetadataProp("author");
export const getTwitter = getSiteMetadataProp("twitter");
export const getPosts = pipe(
  path(["data", "allMarkdownRemark", "edges"]),
  filter(post => {
    const draft = getPostDraft(post);
    return !draft;
  }),
  map(post => ({
    title: getPostTitle(post),
    date: getPostDate(post).toUpperCase(),
    slug: getPostSlug(post)
  }))
);

const frontmatterProp = propName => path(["node", "frontmatter", propName]);
export const getPostTitle = frontmatterProp("title");
export const getPostDate = frontmatterProp("date");
export const getPostDraft = pipe(
  frontmatterProp("draft"),
  Boolean
);
export const getPostSlug = path(["node", "fields", "slug"]);
