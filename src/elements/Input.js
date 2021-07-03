import React from "react";
import styled from "styled-components";

import { Grid, Text } from "../elements";

const Input = (props) => {
  const { label, placeholder, _onChange, type, multiLine, value } = props;

  if (multiLine) {
    return (
      <Grid>
        <label>
          {label && (
            <>
              <Text margin="0px">{label}</Text>
            </>
          )}
          <TextAreaField
            value={value}
            rows={10}
            placeholder={placeholder}
            onChange={_onChange}
          />
        </label>
      </Grid>
    );
  }

  return (
    <Grid>
      <label>
        {label && (
          <>
            <Text margin="0px">{label}</Text>
            <br />
          </>
        )}

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
  multiLine: false,
  label: false,
  placeholder: "입력해주세요!",
  _onChange: () => {},
  type: "text",
  value: "",
};

const InputField = styled.input`
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  border: 1px solid #212121;
  border-radius: 5px;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  border: 1px solid #212121;
  border-radius: 5px;
`;

export default Input;
