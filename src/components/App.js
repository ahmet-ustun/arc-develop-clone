import React, { useState } from "react";

import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Theme from "./ui/Theme.js";
import Header from "./ui/Header.js";
import Footer from "./ui/Footer.js";

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header
          tabValue={tabValue}
          setTabValue={setTabValue}
          itemIndex={itemIndex}
          setItemIndex={setItemIndex}
        />
        <Switch>
          <Route exact path="/" component={() => <div>/</div>} />
          <Route
            exact
            path="/services"
            component={() => <div>/services</div>}
          />
          <Route
            exact
            path="/services/software"
            component={() => <div>/software</div>}
          />
          <Route
            exact
            path="/services/mobile"
            component={() => <div>/mobile</div>}
          />
          <Route
            exact
            path="/services/website"
            component={() => <div>/website</div>}
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
        <Footer
          setTabValue={setTabValue}
          setItemIndex={setItemIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
