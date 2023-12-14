import React from "react";
import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import s1 from "../Assets/Images/Carrosuel/s1.png";
import s2 from "../Assets/Images/Carrosuel/s2.png";
import MediaCard from "../Components/MediaCard";
import about from "../Assets/Images/Home/about.jpg";
import Galary from "../Components/Galary";
import activity from "../Assets/Images/Home/activity.jpg";

function Item(props) {
  return (
    <Box sx={{ m: "auto", alignSelf: "center" }}>
      <img src={props.item.img} alt="any123" height={"100%"} width={"1200px"} />
    </Box>
  );
}

export default function Home() {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: s1,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: s2,
    },
  ];
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      spacing={2}
    >
      <Grid item width={"1200px"}>
        <Carousel
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<ArrowBackIosNewIcon />}
          fullHeightHover
          interval={3000}
          height={"80vh"}
          width={"1200px"}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Grid>
      <Grid
        item
        container
        alignItems={"center"}
        flexDirection={"column"}
        spacing={2}
      >
        <Grid item>
          <Typography variant="h2" color="initial">
            Top News
          </Typography>
        </Grid>
        <Grid container item justifyContent={"space-around"}>
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={"center"}
        flexDirection={"column"}
        spacing={2}
      >
        <Grid item>
          <Typography variant="h2" color="initial">
            About Us
          </Typography>
        </Grid>
        <Grid item container justifyContent={"space-evenly"}>
          <Grid item xs={5}>
            <img
              src={about}
              alt="any123"
              width={"100%"}
              style={{ borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={5} container>
            <Grid item>
              <Typography variant="body1">
                We, at the Department of Computer Science and Engineering, IIT
                Madras, are working towards making logistics operations more
                efficient and sustainable by using state-of-the-art algorithms
                and technologies.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Having built route optimizing, vehicle allocation, ride/space
                sharing, orienteering algorithms for the last 4 years, we have
                integrated all into a SaaS software service. We look to improve
                the efficiency of our algorithms and add a lot more features in
                the coming month.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                You can join us if this field seems interesting to you.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={"center"}
        flexDirection={"column"}
        spacing={2}
      >
        <Grid item>
          <Typography variant="h2">Activites</Typography>
        </Grid>
        <Grid item container justifyContent={"space-evenly"}>
          <Grid item xs={5}>
            <img
              src={activity}
              alt="any123"
              width={"100%"}
              style={{ borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={5}>
            <List>
              <ListItem>
                <Typography variant="h6">
                  Workshops and Training Programmes
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Research - PhD and MS (by Research)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Internships and research experience
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Grand challenges for innovative ideas
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Fostering start-ups in the logistics sector​
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Software prototype development for the logistic sector​
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant="contained" sx={{ fontSize: "30px" }}>
          Join Us
        </Button>
      </Grid>
    </Grid>
  );
}
