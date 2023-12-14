import { Grid, Typography } from "@mui/material";
import React from "react";
import MediaCard from "../Components/MediaCard";
import event from "../Assets/Images/event.jpg";

export default function Events() {
  return (
    <Grid
      container
      spacing={1}
      direction={"column"}
      justify="center"
      alignItems="center"
    >
      <Typography variant="h1" color="initial">
        Webinars
      </Typography>
      <Grid container item justifyContent={"space-around"} spacing={5}>
        <Grid item>
          <MediaCard img={event} title={"Inter-Modal Hub Networks​"} />
        </Grid>
        <Grid item>
          <MediaCard title={"Warehouse Network Operations​"} />
        </Grid>
        <Grid item>
          <MediaCard img={event} title={"Optimal EV Charging Networks"} />
        </Grid>
        <Grid item>
          <MediaCard title={"Inter-Modal Hub Networks​"} />
        </Grid>
        <Grid item>
          <MediaCard img={event} title={"Warehouse Network Operations​"} />
        </Grid>
        <Grid item>
          <MediaCard title={"Optimal EV Charging Networks"} />
        </Grid>
      </Grid>
    </Grid>
  );
}
