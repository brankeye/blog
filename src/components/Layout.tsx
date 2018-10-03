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
    flex: 1
  },
  ({ direction, justifyContent }) => ({
    flexDirection: direction,
    justifyContent
  })
);

export default Layout;
