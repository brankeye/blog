import * as React from "react";
import Helmet from "react-helmet";
import { path } from "ramda";
import { Layout, Header } from "../components";

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
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
      <Helmet title={`Your Blog Name - ${title}`} />
      <Header>{title}</Header>
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
