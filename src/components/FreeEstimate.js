import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

import Lottie from "react-lottie";

import estimateAnimation from "../animations/estimateAnimation/data.json";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import nextArrow from "../assets/forwardArrow.svg";
import nextArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import people from "../assets/people.svg";
import usersIcon from "../assets/users.svg";
import iPhone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";

import CallToAction from "./ui/CallToAction.js";
import ButtonArrow from "./ui/ButtonArrow.js";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "12em",
    height: "10em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
    height: 50,
    width: 205,
    fontSize: "1.25rem",
    marginTop: "5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    subtitle: null,
    active: true,
    options: [
      {
        id: 1,
        title: "Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "Floating Screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "Mobile Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "Phone and Tablet",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "Computer Outline",
        selected: false,
        cost: 0,
      },
    ],
  },
];

function FreeEstimate() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container>
      <Grid item container direction="column" lg>
        <Grid item style={{ marginTop: "2em", marginLeft: "5em" }}>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid
          item
          style={{ marginRight: "10em", maxWidth: "50em", marginTop: "7.5em" }}
        >
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        style={{ marginRight: "2em", marginBottom: "25em" }}
        lg
      >
        {defaultQuestions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment key={question.id}>
              <Grid item>
                <Typography
                  variant="h2"
                  align="center"
                  style={{
                    fontWeight: 500,
                    marginTop: "5em",
                    fontSize: "2.25rem",
                  }}
                  gutterBottom
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: "2.5em" }}
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container>
                {question.options.map((option) => (
                  <Grid item container direction="column" key={option.id} md>
                    <Grid item style={{ maxWidth: "12em" }}>
                      <Typography
                        variant="h6"
                        align="center"
                        style={{ marginBottom: "1em" }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}
        <Grid
          item
          container
          justifyContent="space-around"
          style={{ marginTop: "3em" }}
        >
          <Grid item>
            <img src={backArrow} alt="Arrow for Backward" />
          </Grid>
          <Grid item>
            <img src={nextArrow} alt="Arrow for Forward" />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" className={classes.estimateButton}>
            Get Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FreeEstimate;
