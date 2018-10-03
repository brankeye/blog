import * as React from "react";
import Helmet from "react-helmet";
import styled from "react-emotion";

interface Props {
  children: any;
}

const Header = styled("h1")({
  fontSize: 20
});

export default Header;
