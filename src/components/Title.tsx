import * as React from "react";
import styled from "react-emotion";
import { rhythm } from "../utils/typography";

interface Props {
  children: any;
}

const Title = styled("h1")({
  borderBottom: "none"
});

export default Title;
