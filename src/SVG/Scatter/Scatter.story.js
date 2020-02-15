import React from "react";
import { storiesOf } from "@storybook/react";
import Scatter from "./Scatter";
storiesOf("Scatter", module)
  .add("basic", () => (
    <svg width="300px" height="300px">
      <Scatter
        data={[
          [10, 10],
          [50, 50],
          [100, 10]
        ]}
      />
    </svg>
  ))
  .add("radius", () => (
    <svg width="300px" height="300px">
      <Scatter
        data={[
          [10, 10],
          [50, 50],
          [100, 10]
        ]}
        r={[5, 10, 40]}
      />
    </svg>
  ));
