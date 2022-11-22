import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cloneDeep } from "lodash";

import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";

import Lottie from "react-lottie";

import estimateAnimation from "../animations/estimateAnimation/data.json";

import check from "../assets/check.svg";
import paperPlane from "../assets/send.svg";
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
import users from "../assets/users.svg";
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
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
    padding: "0 0.3em",
    marginTop: "5em",
  },
  specialText: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1.5rem",
    color: theme.palette.common.orange,
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: "For which option can we help?",
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

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which platform(s) do you need?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: iPhone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which feature(s) do you expect?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which feature(s) do you expect?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "Which complexity do you need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: null,
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: null,
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: null,
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which use case do you need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: null,
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: null,
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: null,
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

function FreeEstimate() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;

  const [questions, setQuestions] = useState(defaultQuestions);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [total, setTotal] = useState(0);

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [service, setService] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [complexity, setComplexity] = useState("");
  const [category, setCategory] = useState("");
  const [userCount, setUserCount] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const activeQuestion = newQuestions.find((question) => question.active);
    const activeIndex = activeQuestion.id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...activeQuestion, active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const prevQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const activeQuestion = newQuestions.find((question) => question.active);
    const activeIndex = activeQuestion.id - 1;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...activeQuestion, active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const disablePrevNavigation = () => {
    const activeQuestion = questions.find((question) => question.active);

    if (activeQuestion.id === 1) {
      return true;
    }
    return false;
  };

  const disableNextNavigation = () => {
    const activeQuestion = questions.find((question) => question.active);

    if (activeQuestion.id === 1 || activeQuestion.id === questions.length) {
      return true;
    }
    return false;
  };

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);

    const activeQuestion = newQuestions.find((question) => question.active);
    const activeIndex = activeQuestion.id - 1;
    const newSelectedOption = newQuestions[activeIndex].options[id - 1];

    const oldSelectedOption = activeQuestion.options.find(
      (option) => option.selected
    );

    if (activeQuestion.subtitle === "Select one." && oldSelectedOption) {
      oldSelectedOption.selected = !oldSelectedOption.selected;
    }

    newSelectedOption.selected = !newSelectedOption.selected;

    switch (newSelectedOption.title) {
      case "Software Development":
        setQuestions(softwareQuestions);
        setService(newSelectedOption.title);
        break;
      case "Mobile Development":
        setQuestions(softwareQuestions);
        setService(newSelectedOption.title);
        break;
      case "Website Development":
        setQuestions(websiteQuestions);
        setService(newSelectedOption.title);
        break;
      default:
        setQuestions(newQuestions);
    }
  };

  const handleChange = (event) => {
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        emailRegex.test(event.target.value)
          ? setEmailHelper("")
          : setEmailHelper("Invalid Email");
        break;
      default:
        setPhone(event.target.value);
        phoneRegex.test(event.target.value)
          ? setPhoneHelper("")
          : setPhoneHelper("Invalid Phone");
        break;
    }
  };

  const getTotal = () => {
    let totalCost = 0;

    const selection = questions.map((question) =>
      question.options.filter((option) => option.selected)
    );

    selection
      .filter((element) => element.length)
      .forEach((element) =>
        element.forEach((option) => {
          if (["0-10", "10-100", "100+"].includes(option.title)) {
            totalCost *= option.cost;
            setUserCount(option.title);
          } else {
            totalCost += option.cost;
          }
        })
      );

    setTotal(Math.ceil(totalCost));
  };

  const getPlatforms = () => {
    let newPlatforms = [];

    if (questions.length > 2) {
      newPlatforms = questions
        .filter(
          (question) => question.title === "Which platform(s) do you need?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        );

      newPlatforms = newPlatforms[0].map((option) => option.title);
    }

    setPlatforms(newPlatforms);
  };

  const getFeatures = () => {
    let newFeatures = [];

    if (questions.length > 2) {
      newFeatures = questions
        .filter(
          (question) => question.title === "Which feature(s) do you expect?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        );

      newFeatures = newFeatures.map((element) =>
        element.map((option) => option.title)
      );
    }

    setFeatures(newFeatures.reduce((a, b) => [...a, ...b], []));
  };

  const getComplexity = () => {
    let newComplexity = "";

    if (questions.length > 2) {
      newComplexity = questions
        .filter(
          (question) => question.title === "Which complexity do you need?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        );

      newComplexity = newComplexity[0].map((option) => option.title);
    }

    setComplexity(newComplexity[0]);
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
        {questions
          .filter((question) => question.active)
          .map((question) => (
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
                  <Grid
                    item
                    container
                    direction="column"
                    key={option.id}
                    alignItems="center"
                    component={Button}
                    onClick={() => handleSelect(option.id)}
                    style={{
                      display: "grid",
                      textTransform: "none",
                      borderRadius: 0,
                      backgroundColor: option.selected
                        ? theme.palette.common.orange
                        : null,
                    }}
                    md
                  >
                    <Grid item style={{ maxWidth: "14em" }}>
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
            <IconButton
              disabled={disablePrevNavigation()}
              onClick={prevQuestion}
            >
              <img
                src={disablePrevNavigation() ? backArrowDisabled : backArrow}
                alt="Arrow for Backward"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disabled={disableNextNavigation()}
              onClick={nextQuestion}
            >
              <img
                src={disableNextNavigation() ? nextArrowDisabled : nextArrow}
                alt="Arrow for Forward"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            onClick={() => {
              setIsDialogOpen(true);
              getTotal();
              getPlatforms();
              getFeatures();
              getComplexity();
            }}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="h2" align="center">
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid container>
            <Grid item container direction="column" md={7}>
              <Grid item>
                <TextField
                  id="name"
                  label="Name"
                  value={name}
                  fullWidth
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="email"
                  label="Email"
                  value={email}
                  error={!!emailHelper}
                  helperText={emailHelper}
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="phone"
                  label="Phone"
                  value={phone}
                  error={!!phoneHelper}
                  helperText={phoneHelper}
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item style={{ width: "97.8%" }}>
                <TextField
                  id="text"
                  className={classes.message}
                  value={text}
                  fullWidth
                  multiline
                  minRows={10}
                  InputProps={{ disableUnderline: true }}
                  onChange={(event) => setText(event.target.value)}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  We can create this digital solution for an estimated{" "}
                  <span className={classes.specialText}>${total}</span>.
                </Typography>
                <Typography variant="body1" paragraph>
                  Fill out your name, email and phone, place your request and
                  we'll get back to you with details and a final price.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" md={5}>
              <Grid item>
                <Grid container direction="column">
                  <Grid item container alignItems="center">
                    <Grid item>
                      <img src={check} alt="Icon for Selection" />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                        You want {service}{" "}
                        {platforms.length
                          ? `for ${
                              //if only web application is selected...
                              platforms.indexOf("Web Application") > -1 &&
                              platforms.length === 1
                                ? //then finish sentence here
                                  "a Web Application"
                                : //otherwise, if web application and another platform is selected...
                                platforms.indexOf("Web Application") > -1 &&
                                  platforms.length === 2
                                ? //then finish the sentence here
                                  `a Web Application and an ${platforms[1]}`
                                : //if only one platform is selected which isn't web application...
                                platforms.length === 1
                                ? //then finish the sentence here
                                  `an ${platforms[0]}`
                                : //otherwise, if other two options are selected...
                                platforms.length === 2
                                ? //then finish the sentence here
                                  "an iOS Application and an Android Application"
                                : //otherwise, if all three options are selected...
                                platforms.length === 3
                                ? //then finish the sentence here
                                  "a Web Application, an iOS Application, and an Android Application"
                                : null
                            };`
                          : null}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container alignItems="center">
                    <Grid item>
                      <img src={check} alt="Icon for Selection" />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                        {"with "}
                        {/* if we have features... */}
                        {features.length > 0
                          ? //and there's only 1 feature...
                            features.length === 1
                            ? //then end the sentence here
                              `${features[0]}.`
                            : //otherwise, if there are 2 features...
                            features.length === 2
                            ? //then end the sentence here
                              `${features[0]} and ${features[1]}.`
                            : //otherwise, if there are 3+ features...
                              features
                                //filter out the very last feature...
                                .filter(
                                  (feature, index) =>
                                    index !== features.length - 1
                                )
                                //and for those features return names...
                                .map((feature, index) => (
                                  <span key={index}>{`${feature}, `}</span>
                                ))
                          : null}
                        {features.length > 2
                          ? //and then finally add the last feature
                            ` and ${features[features.length - 1]}.`
                          : null}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container alignItems="center">
                    <Grid item>
                      <img src={check} alt="Icon for Selection" />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                        The features will be of {complexity}, and the project
                        will be used by {userCount} users.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button variant="contained" className={classes.estimateButton}>
                  Confirm
                  <img
                    src={paperPlane}
                    alt="Paper Airplane"
                    style={{ marginLeft: "0.5em" }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default FreeEstimate;
