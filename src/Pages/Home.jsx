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
      mt={1}
    >
      <Grid item width={"1200px"}>
        <Carousel
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<ArrowBackIosNewIcon />}
          fullHeightHover
          duration={500}
          height={"80vh"}
          width={"1200px"}
          cycleNavigation={true}
          swipe={true}
          animation={"slide"}
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
          <Typography variant="h2" sx={{ color: "#660099", fontWeight: 800 }}>
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
          <Typography variant="h2" sx={{ color: "#660099", fontWeight: 800 }}>
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
          <Grid
            item
            xs={6}
            flexDirection={"column"}
            container
            justifyContent={"space-evenly"}
            sx={{ color: "#ff6600" }}
          >
            <Grid item>
              <Typography variant="h5">
                We, at the Department of Computer Science and Engineering, IIT
                Madras, are working towards making logistics operations more
                efficient and sustainable by using state-of-the-art algorithms
                and technologies.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                Having built route optimizing, vehicle allocation, ride/space
                sharing, orienteering algorithms for the last 4 years, we have
                integrated all into a SaaS software service. We look to improve
                the efficiency of our algorithms and add a lot more features in
                the coming month.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
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
          <Typography variant="h2" sx={{ color: "#660099", fontWeight: 800 }}>
            Activites
          </Typography>
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
          <Grid item xs={6} sx={{ color: "#ff6600" }}>
            <List>
              <ListItem>
                <Typography variant="h5">
                  Workshops and Training Programmes
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h5">
                  Research - PhD and MS (by Research)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h5">
                  Internships and research experience
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h5">
                  Grand challenges for innovative ideas
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h5">
                  Fostering start-ups in the logistics sector​
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h5">
                  Software prototype development for the logistic sector​
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
