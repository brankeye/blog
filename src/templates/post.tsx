import * as React from "react";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";
import {
  Layout,
  Title,
  Divider,
  Anchor,
  Description,
  Header
} from "../components";
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
  const title = getTitle(props);
  const post = path(["data", "markdownRemark"], props);
  const postTitle = path(["frontmatter", "title"], post);
  const author = getAuthor(props);
  const twitter = getTwitter(props);
  return (
    <Layout direction="column" justifyContent="center">
      <Helmet title={title} />
      <Link
        to="/"
        style={{
          textDecoration: "none",
          boxShadow: "none",
          color: "#fff"
        }}
      >
        <Header noUnderline>{title}!</Header>
      </Link>
      <Title>{postTitle}</Title>
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
