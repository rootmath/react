import React from "react";
import { storiesOf } from "@storybook/react";
import Path from "./Path";
storiesOf("Path", module).add("basic", () => (
  <svg width="300px" height="300px">
    <Path
      data={[
        [100, 100],
        [200, 200],
        [100, 200],
        [100, 100]
      ]}
    />
  </svg>
));
