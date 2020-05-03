import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { GlobalProvider } from "../../state/globalProvider";
import styled, { ThemeProvider } from "styled-components";
import { dott, blackFriday } from "../../theme/globalStyle";

import AppHeader from "./AppHeader";
import { ThemeSelect } from "../../components";

import { fetchAction, fetchFilterAction } from "../../store/actions";

const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-width: ${(props) => props.theme.contentMinWidth};
`;

const Provider = ({ children, ...props }) => {
  return <GlobalProvider {...props}>{children}</GlobalProvider>;
};

const App = (props) => {
  const [theme, setTheme] = useState(dott);
  const {
    route,
    history,
    match,
    fetch,
    fetchAction,
    fetchFilterAction,
  } = props;
  const params = match.params || {};

  const handleThemeChange = (e) => {
    let theme = e.target.value;
    theme === "dott" ? (theme = dott) : (theme = blackFriday);
    setTheme(theme);
  };

  const children = (route.components || []).map((c, index) => {
    const Component = c.component;
    const componentProps = { ...c.props, params, props };
    return <Component key={index} {...componentProps} />;
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider
        fetch={fetch}
        actions={{ fetchAction, fetchFilterAction }}
        params={{ ...params }}
        history={history}
      >
        <ThemeSelect handleThemeChange={handleThemeChange} />
        <AppWrapper>
          <AppHeader />
          {children}
        </AppWrapper>
      </Provider>
    </ThemeProvider>
  );
};

export default connect(({ fetch }) => ({ fetch }), {
  fetchAction,
  fetchFilterAction,
})(withRouter(App));
