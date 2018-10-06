import * as React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { path } from "ramda";
import { Layout } from "../components";

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
  return (
    <Layout direction="column" justifyContent="center">
      <Helmet title={title} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
