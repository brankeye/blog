import * as React from "react";
import styled from "react-emotion";
import { rhythm } from "../utils/typography";

interface Props {
  children: any;
}

const Header = styled("h1")({
  letterSpacing: 5,
  textTransform: "uppercase"
});

export default Header;
