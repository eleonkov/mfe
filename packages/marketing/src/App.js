import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import LandingPage from "./components/Landing";
import PricingPage from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({ history }) => {
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Switch>
          <Route path="/pricing" component={PricingPage} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </StylesProvider>
    </Router>
  );
};
