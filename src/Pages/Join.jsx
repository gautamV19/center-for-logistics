import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import join from "../Assets/Images/join-startup.jpg";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import TestinomialCard from "../Components/Testinomials";
import InternCard from "../Components/Intership";

export default function Join() {
  return (
    <Grid
      container
      direction={"column"}
      alignItems="center"
      spacing={3}
      mt={1}
      height={"90vh"}
    >
      <Typography variant="h2">Stay tuned for more information...</Typography>
    </Grid>
  );
}
