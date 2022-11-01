import React, { useState } from "react";

import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Theme from "./ui/Theme.js";
import Header from "./ui/Header.js";
import Footer from "./ui/Footer.js";

import LandingPage from "./LandingPage.js";
import Services from "./Services.js";
import Revolution from "./Revolution.js";

import SoftwareDevelopment from "./SoftwareDevelopment.js";
import MobileAppDevelopment from "./MobileAppDevelopment.js";
import WebsiteDevelopment from "./WebsiteDevelopment.js";

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
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setTabValue={setTabValue}
                setItemIndex={setItemIndex}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <Services
                {...props}
                setTabValue={setTabValue}
                setItemIndex={setItemIndex}
              />
            )}
          />
          <Route
            exact
            path="/services/software"
            render={(props) => (
              <SoftwareDevelopment
                {...props}
                setTabValue={setTabValue}
                setItemIndex={setItemIndex}
              />
            )}
          />
          <Route
            exact
            path="/services/mobile"
            render={(props) => (
              <MobileAppDevelopment
                {...props}
                setTabValue={setTabValue}
                setItemIndex={setItemIndex}
              />
            )}
          />
          <Route
            exact
            path="/services/website"
            render={(props) => (
              <WebsiteDevelopment
                {...props}
                setTabValue={setTabValue}
                setItemIndex={setItemIndex}
              />
            )}
          />
          <Route
            exact
            path="/revolution"
            render={(props) => (
              <Revolution
                {...props}
                setTabValue={setTabValue}
              />
            )}
          />
          <Route exact path="/about" component={() => <div>/about</div>} />
          <Route exact path="/contact" component={() => <div>/contact</div>} />
          <Route
            exact
            path="/estimate"
            component={() => <div>/estimate</div>}
          />
        </Switch>
        <Footer setTabValue={setTabValue} setItemIndex={setItemIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
