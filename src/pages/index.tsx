import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

interface Props {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      };
    };
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

export default (props: Props) => (
  <div>
    <h1>A blog by Brandon Keyes</h1>
    <Link to="/hello-world">Hello World!</Link>
  </div>
);
