import * as React from "react";
import styled from "react-emotion";
import { rhythm } from "../utils/typography";
import { mq } from "../utils/theme";

const Header = styled("h1")({
  fontSize: 20,
  letterSpacing: 3,
  textTransform: "uppercase",
  borderBottom: "none"
});

export default Header;
