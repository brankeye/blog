import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { injectGlobal } from "emotion";
import { Layout, Anchor } from "../components";
import { pipe, path, filter, map, curry } from "ramda";

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
        author: string;
        twitter: string;
      };
    };
    allMarkdownRemark: {
      edges: Array<Object>;
    };
  };
}

const getSiteMetadataProp = curry((propName, input) =>
  path(["data", "site", "siteMetadata", propName], input)
);
const getTitle = getSiteMetadataProp("title");
const getAuthor = getSiteMetadataProp("author");
const getTwitter = getSiteMetadataProp("twitter");
const getPosts = pipe(
  path(["data", "allMarkdownRemark", "edges"]),
  filter(post => post.node.frontmatter.title.length > 0)
);
const getPostTitle = path(["node", "frontmatter", "title"]);
const getPostSlug = path(["node", "fields", "slug"]);

export default (props: Props) => {
  const title = getTitle(props);
  const author = getAuthor(props);
  const twitter = getTwitter(props);
  return (
    <Layout direction="column">
      <h1>{title}</h1>
      <p>
        A tech blog by <b>{author}</b> in which he neither publishes nightly nor
        plays the bugle.{" "}
        <p>
          You can{" "}
          <Anchor href={twitter} noUnderline>
            yell at him on Twitter
          </Anchor>{" "}
          if you'd like.
        </p>
      </p>
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
        author
        twitter
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
