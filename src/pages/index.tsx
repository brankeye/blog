import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { injectGlobal } from "emotion";
import { Layout, Header } from "../components";
import { pipe, path, filter, map } from "ramda";

injectGlobal({
  html: {
    width: "100%",
    margin: 0
  },
  body: {
    width: "100%",
    margin: 0
  }
});

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
    allMarkdownRemark: {
      edges: Array<Object>;
    };
  };
}

const getSiteTitle = path(["data", "site", "siteMetadata", "title"]);
const getSiteDescription = path([
  "data",
  "site",
  "siteMetadata",
  "description"
]);
const getPosts = pipe(
  path(["data", "allMarkdownRemark", "edges"]),
  filter(post => post.node.frontmatter.title.length > 0)
);
const getPostTitle = path(["node", "frontmatter", "title"]);
const getPostSlug = path(["node", "fields", "slug"]);

export default (props: Props) => {
  const siteTitle = getSiteTitle(props);
  const siteDescription = getSiteDescription(props);
  return (
    <Layout direction="column">
      <h1>{siteTitle}</h1>
      <h6>{siteDescription}</h6>
      {map(post => {
        const postTitle = getPostTitle(post);
        const slug = getPostSlug(post);
        return (
          <Link key={slug} to={slug}>
            {postTitle}
          </Link>
        );
      }, getPosts(props))}
    </Layout>
  );
};

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
