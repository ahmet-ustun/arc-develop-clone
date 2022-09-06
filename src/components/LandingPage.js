import React from "react";

// import { makeStyles } from "@material-ui/styles";
import Lottie from "react-lottie";

import animationData from "../animations/landingAnimation/data.js";

// const useStyles = makeStyles((theme) => ({}));

function LandingPage() {
  // const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={"100%"} width={"100%"} />;
}

export default LandingPage;
