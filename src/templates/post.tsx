import * as React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Layout, Title, Divider, Anchor, Description } from "../components";
import {
  getTitle,
  getAuthor,
  getTwitter,
  getPosts,
  getPostTitle,
  getPostSlug
} from "../utils/selectors";
import { path } from "ramda";

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
        author: string;
        twitter: string;
      };
    };
    markdownRemark: {
      post: {
        frontmatter: {
          date: string;
          title: string;
        };
      };
    };
  };
}

export default (props: Props) => {
  const post = path(["data", "markdownRemark"], props);
  const title = path(["frontmatter", "title"], post);
  const author = getAuthor(props);
  const twitter = getTwitter(props);
  return (
    <Layout direction="column" justifyContent="center">
      <Helmet title={title} />
      <Title>{title}</Title>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Divider />
      <Description author={author} twitter={twitter} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        twitter
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
