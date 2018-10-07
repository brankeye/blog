import * as React from "react";
import styled from "react-emotion";
import { rhythm } from "../utils/typography";
import Anchor from "./Anchor";

interface Props {
  author: string;
  twitter: string;
}

const Description = ({ author, twitter }: Props) => (
  <p>
    A tech blog by <strong>{author}</strong> in which he neither publishes
    nightly nor plays the bugle. <br />
    You can{" "}
    <Anchor href={twitter} noUnderline>
      yell at him on Twitter
    </Anchor>{" "}
    if you'd like.
  </p>
);

export default Description;
