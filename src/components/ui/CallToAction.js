import React from "react";

import { makeStyles, useTheme } from "@material-ui/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import desktopBackground from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

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
    backgroundImage: `url(${desktopBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
  },
}));

function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      container
      className={classes.background}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item style={{ marginLeft: "5em" }}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
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
            <Grid item container>
              <Button className={classes.learnButton} variant="outlined">
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
      <Grid item style={{ marginRight: "5em" }}>
        <Button variant="contained" className={classes.estimateButton}>
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}

export default CallToAction;
