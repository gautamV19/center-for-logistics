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
    <Grid container direction={"column"} alignItems="center" spacing={2}>
      <Grid
        item
        container
        alignItems={"center"}
        flexDirection={"column"}
        spacing={2}
      >
        <Grid item>
          <Typography variant="h2">For Startups...</Typography>
        </Grid>
        <Grid item container justifyContent={"space-evenly"}>
          <Grid item xs={5}>
            <img
              src={join}
              alt="any123"
              width={"100%"}
              style={{ borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={5}>
            <List>
              <ListItem>
                <Typography variant="h6">
                  Funding projects from outside the IIT ecosystem​
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Fostering start-ups in the logistics sector, internships
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Funding top-quality translational research​
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Fostering government-industry-academia collaborations​
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Training Programs for logistics sector ​
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Scientific events: seminar series, conferences, workshops,
                  summer programs​
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Knowledge Repository: software libraries, data-sets
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Grid item>
            <Button variant="contained" size="large">
              Register
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" size="large">
              Buy Solution
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" size="large">
              Set up RnD
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Grid item>
            <Typography variant="h4">Testinomials</Typography>
          </Grid>
          <Grid item container justifyContent={"space-around"}>
            <TestinomialCard />
            <TestinomialCard />
            <TestinomialCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="column" alignItems="center">
        <Grid Item>
          <Typography variant="h3">For Students...</Typography>
        </Grid>
        <Grid item container justifyContent={"space-evenly"} spacing={3}>
          <Grid item>
            <InternCard />
          </Grid>
          <Grid item>
            <InternCard />
          </Grid>
          <Grid item>
            <InternCard />
          </Grid>
          <Grid item>
            <InternCard />
          </Grid>
          <Grid item>
            <InternCard />
          </Grid>
          <Grid item>
            <InternCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="column" alignItems="center">
        <Grid Item>
          <Typography variant="h3">For Researchers...</Typography>
        </Grid>
        <Grid item container justifyContent={"space-evenly"} spacing={3}>
          <Grid item>
            <InternCard />
          </Grid>
          <Grid item>
            <InternCard />
          </Grid>
          <Grid item>
            <InternCard />
          </Grid>
          <Grid item>
            <InternCard />
          </Grid>
          <Grid item>
            <InternCard />
          </Grid>
          <Grid item>
            <InternCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
