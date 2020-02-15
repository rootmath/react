import React from "react";
import Proptypes from "prop-types";
import Circle from "../Circle";

function Scatter(props) {
  return props.data.map((d, i) => {
    const r = props.r ? (props.r[i] ? props.r[i] : props.r) : undefined;
    return (
      <Circle
        cx={d[0]}
        cy={d[1]}
        key={i}
        r={r}
        strokeWidth={props.strokeWidth}
        fill={props.fill}
        opacity={props.opacity}
      />
    );
  });
}

Scatter.proptypes = {
  data: Proptypes.array.isRequired,
  r: Proptypes.any, //array or number
  strokeWidth: Proptypes.string,
  fill: Proptypes.string,
  opacity: Proptypes.any
};

export default Scatter;
