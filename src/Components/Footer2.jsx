import { Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import contact from "../Assets/Images/contact.jpg";

export default function Footer() {
  return (
    <Grid
      item
      container
      alignItems={"center"}
      flexDirection={"column"}
      spacing={2}
      mt={1}
    >
      <Grid item>
        <Typography variant="h2" sx={{ color: "#660099", fontWeight: 800 }}>
          Contact Us
        </Typography>
      </Grid>
      <Grid item container justifyContent={"space-evenly"}>
        <Grid item xs={5}>
          <img
            src={contact}
            alt="any123"
            height={"600px"}
            style={{ borderRadius: "10px" }}
          />
        </Grid>
        <Grid item xs={5} sx={{ color: "#ff6600" }}></Grid>
      </Grid>
    </Grid>
  );
}
