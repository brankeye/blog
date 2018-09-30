import React from "react";
import Helmet from "react-helmet";

// import '../css/blog-post.css'; // make it pretty!

interface Props {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      };
    };
    markdownRemark: {
      post: {
        frontmatter: {
          title: string;
        };
      };
    };
  };
}

export default function Template({ data }: Props) {
  const { markdownRemark: post } = data;
  const { title } = post.frontmatter;
  return (
    <div className="blog-post-container">
      <Helmet title={`Your Blog Name - ${title}`} />
      <div className="blog-post">
        <h1>{title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
