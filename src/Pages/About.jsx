import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextCard from "../Components/TextCard";
import { focus, impact } from "../Assets/Data/aboutData";

export default function About() {
  return (
    <Grid
      container
      spacing={2}
      direction={"column"}
      justify="center"
      alignItems="center"
      mt={1}
    >
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        direction={"column"}
      >
        <Typography variant="h2" sx={{ color: "#660099", fontWeight: 800 }}>
          Vision
        </Typography>
        <Typography
          variant="h4"
          sx={{ width: "80%", textAlign: "center", color: "#660099" }}
        >
          To build a centre which fosters innovation and enables environmental
          and social sustainability in logistics and supply chain with
          cutting-edge digital transformation technologies.
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        direction={"column"}
        width={"100%"}
        spacing={2}
      >
        <Grid item>
          <Typography variant="h2" sx={{ color: "#660099", fontWeight: 800 }}>
            Focus
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent={"space-around"}
          alignItems={"strech"}
        >
          {focus.map((item) => (
            <Grid item key={item.title}>
              <TextCard title={item.title} description={item.description} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        direction={"column"}
        width={"100%"}
        spacing={2}
      >
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          direction={"column"}
          spacing={2}
        >
          <Typography variant="h2" sx={{ color: "#660099", fontWeight: 800 }}>
            Impact
          </Typography>
          <Typography
            variant="h4"
            sx={{ width: "80%", textAlign: "center", color: "#660099" }}
          >
            Foremost/Leading industry-academia bridge, producing novel
            technologies which will become global standards to
          </Typography>
          <Grid item container justifyContent={"space-around"}>
            {impact.map((item) => (
              <Grid item key={item.title}>
                <TextCard title={item.title} description={item.description} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
