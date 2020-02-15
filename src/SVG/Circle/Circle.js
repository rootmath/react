import React from "react";
import PropTypes from "prop-types";

function Circle(props) {
  return (
    <circle
      cx={props.cx}
      cy={props.cy}
      r={props.r}
      fill={props.fill}
      opacity={props.opacity}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
    />
  );
}

Circle.defaultProps = {
  r: 4,
  fill: "rgba(52, 152, 219)",
  stroke: "black",
  strokeWidth: "1px",
  opacity: 1
};

Circle.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.any,
  fill: PropTypes.string,
  opacity: PropTypes.any
};

export default Circle;
