import * as React from "react";
import styled from "react-emotion";
import { rhythm } from "../utils/typography";

interface Props {
  children: any;
}

const Anchor = styled("a")(({ bold, noUnderline }) => ({
  fontWeight: bold ? "bold" : "normal",
  textDecoration: noUnderline ? "none" : "underline"
}));

export default Anchor;
