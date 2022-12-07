import React, { useState } from "react";
import axios from "axios";
import { cloneDeep } from "lodash";
import Lottie from "react-lottie";
import Head from "next/head";

import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";

import estimateAnimation from "../src/animations/estimateAnimation/data.json";

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
    marginTop: "2.5em",
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
    subtitle: "Select one.",
    active: true,
    options: [
      {
        id: 1,
        title: "Software Development",
        subtitle: null,
        icon: "/assets/software.svg",
        iconAlt: "Floating Screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "Mobile Development",
        subtitle: null,
        icon: "/assets/mobile.svg",
        iconAlt: "Phone and Tablet",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: "/assets/website.svg",
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
        icon: "/assets/website.svg",
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: "/assets/iphone.svg",
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: "/assets/android.svg",
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
        icon: "/assets/camera.svg",
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: "/assets/gps.svg",
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: "/assets/upload.svg",
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
        icon: "/assets/users.svg",
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: "/assets/biometrics.svg",
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: "/assets/bell.svg",
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
        icon: "/assets/info.svg",
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: null,
        icon: "/assets/customized.svg",
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: null,
        icon: "/assets/data.svg",
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
        icon: "/assets/person.svg",
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: "/assets/persons.svg",
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: "/assets/people.svg",
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
        icon: "/assets/info.svg",
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: null,
        icon: "/assets/customized.svg",
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: null,
        icon: "/assets/globe.svg",
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

  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;

  const [questions, setQuestions] = useState(defaultQuestions);

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
  const [userCount, setUserCount] = useState("");
  const [category, setCategory] = useState("");

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    color: "",
  });

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

  const clearUserInfo = () => {
    setName("");
    setEmail("");
    setPhone("");
    setText("");
  };

  const cleanUpStates = () => {
    setPlatforms([]);
    setFeatures([]);
    setComplexity("");
    setUserCount("");
    setCategory("");
  };

  const renderButton = (text) => (
    <>
      {text}
      <img
        src="/assets/send.svg"
        alt="Paper Airplane"
        style={{ marginLeft: "0.5em" }}
      />
    </>
  );

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
        cleanUpStates();
        break;
      case "Mobile Development":
        setQuestions(softwareQuestions);
        setService(newSelectedOption.title);
        cleanUpStates();
        break;
      case "Website Development":
        setQuestions(websiteQuestions);
        setService(newSelectedOption.title);
        cleanUpStates();
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

  const getCategory = () => {
    if (questions.length === 2) {
      const newCategory = questions
        .find((question) => question.title === "Which use case do you need?")
        .options.find((option) => option.selected).title;

      setCategory(newCategory);
    }
  };

  const sendEstimate = () => {
    setIsLoading(true);

    axios
      .get(
        "https://us-central1-arc-development-0.cloudfunctions.net/sendMail",
        {
          params: {
            name,
            email,
            phone,
            text,
            total,
            service,
            platforms,
            features,
            complexity,
            userCount,
            category,
          },
        }
      )
      .then((response) => {
        setIsOpen(false);
        setIsLoading(false);
        clearUserInfo();
        cleanUpStates();
        setQuestions(defaultQuestions);
        setAlert({
          open: true,
          message: "Request placed successfully 🎉",
          color: "#4BB543",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        setAlert({
          open: true,
          message: "An error occurred, try again!",
          color: "#FF3232",
        });
      });
  };

  const disableEstimate = () => {
    const selections = questions
      .map((question, index) => {
        const nextQuestion = questions[index + 1];
        const lastIndex = questions.length - 1;

        if (index !== lastIndex && question.title === nextQuestion.title) {
          return [...question.options, ...nextQuestion.options].filter(
            (option) => option.selected
          );
        }

        if (question.title === "Which feature(s) do you expect?") {
          return [];
        }
        return question.options.filter((option) => option.selected);
      })
      .filter((question) => question.length);

    const activeQuestion = questions.find((question) => question.active);

    if (activeQuestion.id === 1) {
      return true;
    }

    if (activeQuestion.title === "Which use case do you need?") {
      return selections.length === questions.length - 1 ? false : true;
    }
    return selections.length === questions.length - 2 ? false : true;
  };

  const softwareSelection = (
    <Grid container direction="column">
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.25em" }}
      >
        <Grid item xs={matchesSM ? 1 : 2}>
          <img src="/assets/check.svg" alt="Icon for Selection" />
        </Grid>
        <Grid item xs={matchesSM ? 11 : 10}>
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
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.25em" }}
      >
        <Grid item xs={matchesSM ? 1 : 2}>
          <img src="/assets/check.svg" alt="Icon for Selection" />
        </Grid>
        <Grid item xs={matchesSM ? 11 : 10}>
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
                    .filter((feature, index) => index !== features.length - 1)
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
        <Grid item xs={matchesSM ? 1 : 2}>
          <img src="/assets/check.svg" alt="Icon for Selection" />
        </Grid>
        <Grid item xs={matchesSM ? 11 : 10}>
          <Typography variant="body1">
            The features will be of {complexity}, and the project will be used
            by {userCount} users.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  const websiteSelection = (
    <Grid container direction="column">
      <Grid item container alignItems="center" spacing={2}>
        <Grid item xs={matchesSM ? 1 : 2}>
          <img src="/assets/check.svg" alt="Icon for Selection" />
        </Grid>
        <Grid item xs={matchesSM ? 11 : 10}>
          <Typography variant="body1">
            You want{" "}
            {category === "Basic"
              ? "a Basic Website"
              : `an ${category} Website`}
            .
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid container>
      <Head>
        <title key="title">
          Free Estimate for Your Future Project | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Use our free online estimate calculator to 
          instantly check the cost of your future software, 
          mobile app or website design and development project!"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Arc Development | Free Estimate"
        />
        <meta
          property="og:url"
          key="og:url"
          content="www.google.com/estimate"
        />
        <link rel="canonical" key="canonical" href="www.google.com/estimate" />
      </Head>
      <Grid
        item
        container
        direction="column"
        lg
        alignItems={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{ marginTop: "2em", marginLeft: matchesMD ? 0 : "5em" }}
        >
          <Typography variant="h1" align={matchesMD ? "center" : "left"}>
            Estimate
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            marginRight: matchesMD ? 0 : "10em",
            maxWidth: "50em",
            marginTop: "7.5em",
          }}
        >
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        style={{ marginRight: matchesMD ? 0 : "2em", marginBottom: "25em" }}
        lg
      >
        {questions
          .filter((question) => question.active)
          .map((question) => (
            <React.Fragment key={question.id}>
              <Grid item>
                <Typography
                  variant="h1"
                  align="center"
                  style={{
                    fontWeight: 500,
                    marginTop: "5em",
                    fontSize: matchesSM ? "2rem" : "2.25rem",
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
                      marginBottom: matchesSM ? "1.25em" : 0,
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
                src={
                  disablePrevNavigation()
                    ? "/assets/backArrowDisabled.svg"
                    : "/assets/backArrow.svg"
                }
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
                src={
                  disableNextNavigation()
                    ? "/assets/forwardArrowDisabled.svg"
                    : "/assets/forwardArrow.svg"
                }
                alt="Arrow for Forward"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            disabled={disableEstimate()}
            onClick={() => {
              setIsOpen(true);
              getTotal();
              getPlatforms();
              getFeatures();
              getComplexity();
              getCategory();
            }}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={isOpen}
        style={{ zIndex: 1310 }}
        PaperProps={{ style: { padding: "0.8em 0" } }}
        fullWidth
        maxWidth="lg"
        fullScreen={matchesSM}
        onClose={() => setIsOpen(false)}
      >
        <DialogContent>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="h4" align="center">
                Request Estimate
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-around" spacing={2}>
            <Grid
              item
              container
              direction="column"
              style={{
                maxWidth: matchesSM ? null : matchesMD ? "25em" : "30em",
              }}
              md={7}
            >
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
              <Grid item style={{ width: "97.5%" }}>
                <TextField
                  id="text"
                  className={classes.message}
                  value={text}
                  fullWidth
                  placeholder="Tell us more about your project"
                  multiline
                  minRows={10}
                  InputProps={{ disableUnderline: true }}
                  onChange={(event) => setText(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginTop: "2.5em" }}>
                <Typography
                  variant="body1"
                  style={{ lineHeight: 1.3 }}
                  paragraph
                >
                  We can create this digital solution for an estimated{" "}
                  <span className={classes.specialText}>${total}</span>.
                </Typography>
                <Typography variant="body1" paragraph>
                  Fill out your name, email and phone, place your request and
                  we'll get back to you with details and a final price.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{
                maxWidth: matchesSM ? null : "30em",
              }}
              md={5}
            >
              <Grid item style={{ marginTop: matchesSM ? 0 : "1.25em" }}>
                {questions.length > 2 ? softwareSelection : websiteSelection}
              </Grid>
              <Grid
                item
                container
                justifyContent="space-around"
                alignItems="center"
                style={{ marginBottom: matchesSM && "1.25em" }}
              >
                <Grid item>
                  <Button
                    color="primary"
                    style={{ marginTop: "3.5em" }}
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.estimateButton}
                    disabled={
                      !name ||
                      !email ||
                      !phone ||
                      !text ||
                      !!emailHelper ||
                      !!phoneHelper ||
                      isLoading
                    }
                    onClick={sendEstimate}
                  >
                    {isLoading ? (
                      <CircularProgress size={30} />
                    ) : (
                      renderButton("Confirm")
                    )}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: {
            backgroundColor: alert.color,
            display: "block",
            textAlign: "center",
          },
        }}
        onClose={() => setAlert({ open: false, message: "", color: "" })}
      />
    </Grid>
  );
}

export default FreeEstimate;
