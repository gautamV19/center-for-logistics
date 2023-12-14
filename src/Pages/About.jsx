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
        direction={"column"}
        justifyContent={"center"}
        spacing={0}
        width={"50%"}
      >
        <Grid item>
          <Typography
            variant="h5"
            mt={5}
            sx={{ color: "#660099", fontWeight: 600 }}
          >
            Net Zero Carbon + Happy, Safe and Comfortable Workplace
          </Typography>
          <List>
            <ListItem>
              <Typography variant="h6" sx={{ color: "#ff6600" }}>
                Harmony among logistics service providers - 100% resource
                utilization
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" sx={{ color: "#ff6600" }}>
                Increase reliability of logistics services
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" sx={{ color: "#ff6600" }}>
                Increase overall satisfaction in the ecosystem - service
                providers and consumers
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            mt={5}
            sx={{ color: "#660099", fontWeight: 600 }}
          >
            Digital transformation for end-to-end supply chain solutions and
            decision making
          </Typography>
          <List>
            <ListItem>
              <Typography variant="h6" sx={{ color: "#ff6600" }}>
                Using IoT - to gather dynamic information
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6" sx={{ color: "#ff6600" }}>
                Algorithmic and Machine Learning
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            mt={5}
            sx={{ color: "#660099", fontWeight: 600 }}
          >
            Global network of experts
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            mt={5}
            sx={{ color: "#660099", fontWeight: 600 }}
          >
            A resource centre for technology and processes in logistics
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            mt={5}
            sx={{ color: "#660099", fontWeight: 600 }}
          >
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
        spacing={2}
      >
        <Grid item>
          <Typography variant="h2" sx={{ color: "#660099", fontWeight: 800 }}>
            Focus
          </Typography>
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
