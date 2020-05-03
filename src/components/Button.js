import React from "react";
import styled, { css } from "styled-components";

const ButtonComponent = styled.button`
  font-size: ${(props) => props.theme.fontSizeMedium};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.primary};
  cursor: pointer;
  ${(props) =>
    props.primary &&
    css`
      background: ${(props) => props.theme.primary};
      color: white;
    `};
  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
`;

const Button = (props) => {
  return (
    <div>
      <ButtonComponent onClick={props.onClick}>{props.value}</ButtonComponent>
    </div>
  );
};

export default Button;
