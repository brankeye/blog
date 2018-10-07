import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { injectGlobal } from "emotion";
import { Layout, Anchor, Header, Description } from "../components";
import {
  getTitle,
  getAuthor,
  getTwitter,
  getPosts,
  getPostTitle,
  getPostSlug
} from "../utils/selectors";
import { map } from "ramda";

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

export default (props: Props) => {
  const title = getTitle(props);
  const author = getAuthor(props);
  const twitter = getTwitter(props);
  return (
    <Layout direction="column">
      <Header>{title}!</Header>
      <Description author={author} twitter={twitter} />
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
