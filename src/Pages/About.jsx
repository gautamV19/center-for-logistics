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
      spacing={1}
      direction={"column"}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        direction={"column"}
      >
        <Typography variant="h2">Vision</Typography>
        <Typography variant="h4" sx={{ width: "80%", textAlign: "center" }}>
          To build a centre which fosters innovation and enables environmental
          and social sustainability in logistics and supply chain with
          cutting-edge digital transformation technologies.
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={"column"}
        justifyContent={"center"}
        spacing={0}
        width={"50%"}
      >
        <Grid item>
          <Typography variant="h5" mt={5}>
            Net Zero Carbon + Happy, Safe and Comfortable Workplace
          </Typography>
          <List>
            <ListItem>
              <Typography variant="h6">
                Harmony among logistics service providers - 100% resource
                utilization
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6">
                Increase reliability of logistics services
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6">
                Increase overall satisfaction in the ecosystem - service
                providers and consumers
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <Typography variant="h5" mt={5}>
            Digital transformation for end-to-end supply chain solutions and
            decision making
          </Typography>
          <List>
            <ListItem>
              <Typography variant="h6">
                Using IoT - to gather dynamic information
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6">
                Algorithmic and Machine Learning
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <Typography variant="h5" mt={5}>
            Global network of experts
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" mt={5}>
            A resource centre for technology and processes in logistics
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" mt={5}>
            High visibility, productivity (scientific publications), large
            outreach (seminars, workshops, conferences, summer programs),
            conference proceedings
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        direction={"column"}
        width={"100%"}
      >
        <Grid item>
          <Typography variant="h2">Focus</Typography>
        </Grid>
        <Grid item container justifyContent={"space-around"}>
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
      >
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          direction={"column"}
          spacing={2}
        >
          <Typography variant="h2">Impact</Typography>
          <Typography variant="h4" sx={{ width: "80%", textAlign: "center" }}>
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
