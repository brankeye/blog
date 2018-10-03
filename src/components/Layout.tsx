import * as React from "react";
import Helmet from "react-helmet";
import styled from "react-emotion";
import { rhythm } from "../utils/typography";

interface Props {
  children: any;
}

const Layout = styled("div")(
  {
    display: "flex",
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: rhythm(30),
    padding: `${rhythm(1.5)} ${rhythm(0.75)}`
  },
  ({ direction, justifyContent, alignItems }) => ({
    flexDirection: direction,
    justifyContent,
    alignItems
  })
);

export default Layout;
