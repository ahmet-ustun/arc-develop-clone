import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Theme from "./ui/Theme.js";
import Header from "./ui/Header.js";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>/</div>} />
          <Route
            exact
            path="/services"
            component={() => <div>/services</div>}
          />
          <Route
            exact
            path="/software"
            component={() => <div>/software</div>}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>/mobileapps</div>}
          />
          <Route
            exact
            path="/websites"
            component={() => <div>/websites</div>}
          />
          <Route
            exact
            path="/revolution"
            component={() => <div>/revolution</div>}
          />
          <Route exact path="/about" component={() => <div>/about</div>} />
          <Route exact path="/contact" component={() => <div>/contact</div>} />
          <Route
            exact
            path="/estimate"
            component={() => <div>/estimate</div>}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
