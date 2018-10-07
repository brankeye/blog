import * as React from "react";
import styled from "react-emotion";
import { rhythm } from "../utils/typography";

interface Props {
  children: any;
}

const Title = ({ children }: Props) => <h1>{children}</h1>;

export default Title;
