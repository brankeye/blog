import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { Layout, Header, Description, PostList } from "../components";
import { getTitle, getAuthor, getTwitter, getPosts } from "../utils/selectors";

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
  const posts = getPosts(props);
  return (
    <Layout direction="column">
      <Header>{title}</Header>
      <Description author={author} twitter={twitter} />
      <PostList posts={posts} />
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
            date(formatString: "DD MMM YYYY")
            title
          }
        }
      }
    }
  }
`;
