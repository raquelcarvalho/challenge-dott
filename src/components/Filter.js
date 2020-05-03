import React from "react";
import styled from "styled-components";
import { useGlobalValue } from "../state/globalProvider";
import { TextInput } from "./inputs";

const FilterWraper = styled.div`
  width: 70%;
  margin: -50px auto 0;
  background: #fff;
  border-radius: ${(props) => props.theme.borderRadius};
  min-width: ${(props) => props.theme.contentMinWidth};
  padding: 30px;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.25),
    -5px -5px 20px 0px rgba(0, 0, 0, 0.22);
`;

const Filter = (props) => {
  const { fetchFilterAction } = useGlobalValue();
  const { name, url } = props;

  const onChange = (e) => {
    fetchFilterAction(name, url, e.target.value);
  };

  return (
    <FilterWraper>
      <TextInput placeholder="Filter here!" onChange={onChange} />
    </FilterWraper>
  );
};

export default Filter;
