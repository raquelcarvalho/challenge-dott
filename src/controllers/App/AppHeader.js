import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const Header = styled.div`
  width: 100%;
  height: 12rem;
  padding: 1rem;
  min-width: ${(props) => props.theme.contentMinWidth};
  color: ${(props) => props.theme.dark};
  background-color: ${(props) => props.theme.primary};
`;

const Title = styled.h1`
  font-weight: 900;
  color: ${(props) => props.theme.light};
`;

const Logo = styled.img`
  height: 80px;
  filter: ${(props) => props.theme.logo};
`;

const AppHeader = (props) => {
  return (
    <Header>
      <Logo src={logo} alt="logo" />
      <Title>Weather Forecast</Title>
    </Header>
  );
};

export default AppHeader;
