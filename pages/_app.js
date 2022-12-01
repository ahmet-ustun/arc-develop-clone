import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import { ThemeProvider } from "@material-ui/core/styles";

import Theme from "../src/ui/Theme.js";
import Header from "../src/ui/Header.js";
import Footer from "../src/ui/Footer.js";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [tabValue, setTabValue] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>
          Arc Development | Software, Mobile App & Website Development
        </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={Theme}>
        <Header
          tabValue={tabValue}
          setTabValue={setTabValue}
          itemIndex={itemIndex}
          setItemIndex={setItemIndex}
        />
        <Component
          {...pageProps}
          setTabValue={setTabValue}
          setItemIndex={setItemIndex}
        />
        <Footer setTabValue={setTabValue} setItemIndex={setItemIndex} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
