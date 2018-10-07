import * as React from "react";
import styled from "react-emotion";
import { rhythm } from "../utils/typography";
import { border } from "../utils/theme";

interface Props {
  children: any;
}

const Title = styled("h1")({
  borderBottom: border
});

export default Title;
