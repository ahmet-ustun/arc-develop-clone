import React from "react";
import Lottie from "react-lottie";
import Head from "next/head";

import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import animationData from "../src/animations/landingAnimation/data.js";

import Link from "../src/Link.js";
import ButtonArrow from "../src/ui/ButtonArrow.js";
import CallToAction from "../src/ui/CallToAction.js";

const useStyles = makeStyles((theme) => ({
  animation: {
    minWidth: "21em",
    maxWidth: "50em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  revolutionBackground: {
    backgroundImage: 'url("/assets/repeatingBackground.svg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0",
      borderRadius: 0,
      width: "100%",
    },
  },
  informationBackground: {
    backgroundImage: 'url("/assets/infoBackground.svg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

function LandingPage({ setTabValue, setItemIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container className={classes.mainContainer} direction="column">
      <Head>
        <title key="title">
          Arc Development | Software, Mobile App & Website Development
        </title>
        <meta
          name="description"
          key="description"
          content="Pristine software, custom-designed from the 
          ground up with cutting-edge optimizations. Use our 
          free estimate calculator to check your future cost!"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Arc Development | Homepage"
        />
        <meta property="og:url" key="og:url" content="www.google.com" />
        <link rel="canonical" key="canonical" href="www.google.com" />
      </Head>
      <Grid item>
        {/*----- Hero Intro Block -----*/}
        <Grid container justifyContent="flex-end" alignItems="center">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h1" align="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              className={classes.buttonContainer}
              justifyContent="center"
            >
              <Grid item>
                <Button
                  className={classes.estimateButton}
                  variant="contained"
                  component={Link}
                  href="/estimate"
                  onClick={() => setTabValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.learnButtonHero}
                  variant="outlined"
                  component={Link}
                  href="/revolution"
                  onClick={() => setTabValue(2)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*----- Software Block -----*/}
        <Grid
          container
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: !matchesSM && "5em",
              textAlign: matchesSM && "center",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Software Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration</span>.
            </Typography>
            <Button
              className={classes.learnButton}
              variant="outlined"
              component={Link}
              href="/software"
              onClick={() => {
                setTabValue(1);
                setItemIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src="/assets/customSoftwareIcon.svg"
              alt="Software Development Icon"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*----- Mobile App Block -----*/}
        <Grid
          container
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : "flex-end"}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM && "center",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Mobile App Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Service. Extend Access. Engage Users.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Integrate your web experience or create a standalone app.
            </Typography>
            <Button
              className={classes.learnButton}
              variant="outlined"
              component={Link}
              href="/mobile"
              onClick={() => {
                setTabValue(1);
                setItemIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid
            item
            style={{
              marginRight: !matchesSM && "5em",
            }}
          >
            <img
              className={classes.icon}
              src="/assets/mobileIcon.svg"
              alt="Mobile App Development Icon"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*----- Website Block -----*/}
        <Grid
          container
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: !matchesSM && "5em",
              textAlign: matchesSM && "center",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Website Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Optimized websites for search engines , built for speed.
            </Typography>
            <Button
              className={classes.learnButton}
              variant="outlined"
              component={Link}
              href="/website"
              onClick={() => {
                setTabValue(1);
                setItemIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src="/assets/websiteIcon.svg"
              alt="Website Development Icon"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*----- Revolution Block -----*/}
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: "100em", marginTop: "12em" }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" gutterBottom>
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    className={classes.learnButtonHero}
                    variant="outlined"
                    component={Link}
                    href="/revolution"
                    onClick={() => setTabValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/*----- Information Block -----*/}
        <Grid container alignItems="center" style={{ height: "80em" }}>
          <Grid
            item
            container
            direction={matchesXS ? "column" : "row"}
            style={{
              position: "absolute",
            }}
          >
            <Grid
              item
              sm
              style={{
                marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "left",
              }}
            >
              <Grid
                container
                direction="column"
                style={{ marginBottom: matchesXS ? "10em" : 0 }}
              >
                <Typography variant="h1" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Let's get personal!
                </Typography>
                <Grid item>
                  <Button
                    className={classes.learnButton}
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    component={Link}
                    href="/about"
                    onClick={() => setTabValue(3)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h1" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Come and say hello!
                </Typography>
                <Grid item>
                  <Button
                    className={classes.learnButton}
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                    component={Link}
                    href="/contact"
                    onClick={() => setTabValue(4)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.informationBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/*----- Action Call Block -----*/}
        <CallToAction setTabValue={setTabValue} />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
