import React from "react";
import { storiesOf } from "@storybook/react";
import Circle from "./Circle";
storiesOf("Circle", module).add("basic", () => (
  <svg width="300px" height="300px">
    <Circle cx={50} cy={50} r={10} />
  </svg>
));
