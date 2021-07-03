import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, margin, children } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    children: children,
    margin: margin,
  };
  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
};

const P = styled.p`
  width: 100%;
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")}
`;

export default Text;
