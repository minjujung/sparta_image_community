import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_float } = props;

  if (is_float) {
    return <FloatBtn onClick={_onClick}>{text}</FloatBtn>;
  }

  return <Btn onClick={_onClick}>{text}</Btn>;
};

Button.defaultProps = {
  text: "텍스트",
  _onClick: () => {},
  is_float: false,
};

const Btn = styled.button`
  width: 100%;
  color: white;
  background-color: #212121;
  border: none;
  padding: 12px 0px;
  box-sizing: border-box;
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
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`;

export default Button;
