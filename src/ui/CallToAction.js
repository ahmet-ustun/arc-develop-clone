import React from "react";

import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Link from "../Link.js";
import ButtonArrow from "./ButtonArrow.js";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: 'url("/assets/background.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: 'url("/assets/mobileBackground.jpg")',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

function CallToAction({ setTabValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      className={classes.background}
      alignItems="center"
      justifyContent={matchesSM ? "center" : "space-between"}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1">
              Simple Software.
              <br />
              Visible Results.
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ fontSize: "1.5rem" }}
              gutterBottom
            >
              Take advantage of the 21st century.
            </Typography>
            <Grid
              item
              container
              justifyContent={matchesSM ? "center" : undefined}
            >
              <Button
                className={classes.learnButton}
                variant="outlined"
                component={Link}
                href="/revolution"
                onClick={() => setTabValue(2)}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
        <Button
          variant="contained"
          className={classes.estimateButton}
          component={Link}
          href="/estimate"
          onClick={() => setTabValue(5)}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}

export default CallToAction;
