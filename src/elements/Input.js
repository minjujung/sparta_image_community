import React from "react";
import styled from "styled-components";

import { Grid } from "../elements";

const Input = (props) => {
  const { label, placeholder, _onChange, type } = props;
  return (
    <Grid>
      <label>
        {label}
        <br />
        <InputField
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
        />
      </label>
    </Grid>
  );
};

Input.defaultProps = {
  label: "입력",
  placeholder: "입력해주세요!",
  _onChange: () => {},
  type: "text",
};

const InputField = styled.input`
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  border: 1px solid #212121;
  border-radius: 5px;
`;

export default Input;
