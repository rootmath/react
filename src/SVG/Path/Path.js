import React from "react";
import PropTypes from "prop-types";

function linearPathData(data) {
  const start = data[0],
    remaining = data.slice(1),
    moveTo = "M" + start[0] + " " + start[1],
    lineTo = remaining
      .map(point => {
        return "L" + point[0] + " " + point[1];
      })
      .join("");
  return moveTo + lineTo;
}

function dataToPathData(data, order) {
  // order is 1,2,3 = linear, quadratic, or cubic
  // TODO: finish this
  switch (order) {
    case 1:
      return linearPathData(data);
    case 3:
      //TODO cubic spline interpolation?
      console.log("Cubic interpolation not implemented");
    /* falls through */
    default:
      return linearPathData(data);
  }
}

function Path(props) {
  // plot data
  return (
    <path
      d={dataToPathData(props.data, props.order)}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
      fill={props.fill}
    />
  );
}

Path.defaultProps = {
  order: 1,
  stroke: "rgba(52, 152, 219)",
  strokeWidth: "4px",
  opacity: 1,
  fill: "none"
};

Path.propTypes = {
  data: PropTypes.array.isRequired,
  order: PropTypes.number,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.any,
  fill: PropTypes.string,
  opacity: PropTypes.number
};

export default Path;

// UNUSED functions for attempting quadratic interpolations
//function quadraticControlPoint(p1, p2, p3, t = 0.5) {
//  // find the bezier control point of a quadratic which passes through p1,p2,p3
//  // see https://pomax.github.io/bezierinfo/#abc
//  // const u = ((1 - t) * (1 - t)) / (t * t + (1 - t) * (1 - t)),
//  //   cx = u * p1[0] + (1 - u) * p3[0],
//  //   cy = u * p1[1] + (1 - u) * p3[1],
//  //   C = [cx, cy],
//  //   B = p2,
//  //   ratio = Math.abs(
//  //     (t * t + (1 - t) * (1 - t) - 1) / (t * t + (1 - t) * (1 - t))
//  //   ),
//  //   A = [B[0] - (C[0] - B[0]) / ratio, B[1] + (B[1] - C[1]) / ratio];
//  const u = 0.5,
//    B = p2,
//    C = [u * p1[0] + (1 - u) * p3[0], u * p1[1] + (1 - u) * p3[1]],
//    A = [2 * B[0] - C[0], 2 * B[1] - C[1]];
//
//  console.log("P1 " + p1);
//  console.log("P2 " + p2);
//  console.log("P3 " + p3);
//  console.log("A " + A);
//  // console.log("ratio " + ratio);
//  // console.log("t " + t);
//  // console.log("u " + u);
//  return A;
//}
//
//function dataToQuadBezier(data, t = 0.5) {
//  // convert raw data into array of data and bezier control points
//  const final = [];
//  for (var i = 0; i < data.length - 2; i++) {
//    final.push(data[i]);
//    final.push(quadraticControlPoint(data[i], data[i + 1], data[i + 2], t));
//  }
//  final.push(data[data.length - 2]);
//  final.push(data[data.length - 1]);
//  console.log("FINAL " + final);
//  return final;
//}
//
//function pairsToQuadPathPoint(p, q) {
//  return "Q" + p[0] + " " + p[1] + " " + q[0] + " " + q[1];
//}
//
//function quadraticPathData(data) {
//  const start = data[0],
//    remaining = data.slice(1),
//    moveTo = "M" + start[0] + " " + start[1],
//    curve = reducePairs(remaining, pairsToQuadPathPoint);
//  return moveTo + curve;
//}
//
//function cubicPathData(data) {
//  // TODO: finish this
//  return data;
//}
