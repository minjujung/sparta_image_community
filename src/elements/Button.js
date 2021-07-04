import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_float, children, margin, width, padding } = props;

  if (is_float) {
    return <FloatBtn onClick={_onClick}>{text ? text : children}</FloatBtn>;
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
  };

  return (
    <Btn {...styles} onClick={_onClick}>
      {text ? text : children}
    </Btn>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
  padding: "12px 0px",
};

const Btn = styled.button`
  width: ${(props) => props.width};
  color: white;
  background-color: #212121;
  border: none;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")}
`;

const FloatBtn = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 10px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`;

export default Button;
