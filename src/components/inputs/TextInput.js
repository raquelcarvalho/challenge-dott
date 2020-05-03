import React from "react";
import styled from "styled-components";

const TextInputContainer = styled.label`
  display: block;
`;

const Input = styled.input`
  appearance: none;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 40px;
  padding: 0.5ch 1ch;
  box-sizing: border-box;
  line-height: 120%;
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: ${(props) => props.theme.inputFontSize};
  border: 1px solid transparent;
  border-color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.inputBackgroundColor};
  color: ${(props) => props.theme.dark};
  outline: none;

  &:innvalid {
    border-color: ${(props) => props.theme.danger};
  }

  &:focus {
    border-color: ${(props) => props.theme.light};
  }
`;

const TitleLabel = styled.h5`
  display: flex;
  white-space: nowrap;
  margin: 0;
  margin-bottom: 0.4rem;
  * {
    line-height: 1em;
    box-sizing: border-box;
  }
`;

const TextInput = (props) => {
  const { name, ...inputProps } = props;
  return (
    <TextInputContainer>
      <TitleLabel>{name}</TitleLabel>
      <Input {...inputProps} />
    </TextInputContainer>
  );
};

export default TextInput;
