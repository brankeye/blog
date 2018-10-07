import * as React from "react";
import styled from "react-emotion";
import { rhythm } from "../utils";
import { brighterColor } from "../utils/theme";

const Divider = styled("hr")(({ height }) => ({
  backgroundColor: brighterColor,
  borderColor: brighterColor,
  height
}));

Divider.defaultProps = {
  height: 4
};

export default Divider;
