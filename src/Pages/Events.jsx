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
      mt={1}
      height={"90vh"}
    >
      <Typography variant="h2" sx={{ color: "#660099", fontWeight: 800 }}>
        We will be having events soon!
      </Typography>
      <Typography variant="h5" sx={{ color: "#660099" }}>
        Topics will be Optimal EV Charging Networks, Inter-Modal Hub Networks,
        Warehouse Network Operations, etc.
      </Typography>
    </Grid>
  );
}
