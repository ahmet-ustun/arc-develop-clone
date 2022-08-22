import React from "react";

import { ThemeProvider } from "@material-ui/styles";

import Theme from "./ui/Theme.js";
import Header from "./ui/Header.js";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      Hello world!
    </ThemeProvider>
  );
}

export default App;
