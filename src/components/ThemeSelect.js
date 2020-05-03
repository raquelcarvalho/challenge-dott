import React, { useState } from "react";
import styled from "styled-components";

export const ThemeSelectWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.phone} {
    flex-direction: column;
  }
`;

const Select = styled.select`
  font-size: 0.8rem;
  border: 1px solid ${(props) => props.theme.light};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${(props) => props.theme.light};
  border-radius: 2px;
  outline: none;
`;

export const SelectOpt = styled.option`
  font-size: 1rem;
`;

export const Label = styled.option`
  font-size: 0.8rem;
  color: ${(props) => props.theme.light};
  margin-right: 5px;
`;

const ThemeSelect = (props) => {
  const [selected, setSelected] = useState("dott");

  return (
    <ThemeSelectWrapper>
      <Label>Choose a theme: </Label>
      <Select
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
          return props.handleThemeChange(e);
        }}
      >
        <SelectOpt value="dott">Dott</SelectOpt>
        <SelectOpt value="blackFriday">Black Friday</SelectOpt>
      </Select>
    </ThemeSelectWrapper>
  );
};

export default ThemeSelect;
