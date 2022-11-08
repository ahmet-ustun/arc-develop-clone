import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import background from "../assets/background.jpg";
import mobileBack from "../assets/mobileBackground.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import paperPlane from "../assets/send.svg";

import ButtonArrow from "./ui/ButtonArrow.js";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBack})`,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
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
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    borderRadius: 5,
    marginTop: "5em",
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

function ContactUs({ setTabValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;

  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");


  const handleChange = (event) => {
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        emailRegex.test(event.target.value)
          ? setEmailHelper("")
          : setEmailHelper("Invalid Email");
        break;
      case "phone":
        setPhone(event.target.value);
        phoneRegex.test(event.target.value)
          ? setPhoneHelper("")
          : setPhoneHelper("Invalid Phone");
        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={4}
        xl={3}
        style={{
          marginTop: matchesMD && "2em",
          marginBottom: matchesMD && "2em",
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h2"
                align={matchesMD ? "center" : undefined}
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="Phone Icon"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  +359 88 233 0606
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  ahmetustunt@gmail.com
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              spacing={1}
              style={{ maxWidth: "20em" }}
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
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
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
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: "2em" }}
            >
              <Button variant="contained" className={classes.sendButton}>
                Send Message
                <img
                  src={paperPlane}
                  alt="Paper Airplane"
                  style={{ marginLeft: "0.5em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.background}
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        justifyContent={matchesMD ? "center" : "space-around"}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
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
              <Grid
                item
                container
                justifyContent={matchesMD ? "center" : undefined}
              >
                <Button
                  className={classes.learnButton}
                  variant="outlined"
                  component={Link}
                  to="/revolution"
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
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            component={Link}
            to="/estimate"
            onClick={() => setTabValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactUs;
