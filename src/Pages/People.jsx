import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import BioCard from "../Components/BioCard";
import { faculty, governingBoard } from "../Assets/Data/peopleData";

export default function People() {
  return (
    <Grid
      container
      spacing={2}
      direction={"column"}
      justify="center"
      alignItems="center"
      mt={1}
    >
      <Typography variant="h2" sx={{ color: "#660099", fontWeight: 800 }}>
        Faculty
      </Typography>
      <Grid container justifyContent={"space-evenly"} spacing={3} mt={1} mb={1}>
        {faculty.map((person) => (
          <Grid item key={person.name}>
            <BioCard
              img={person.img}
              name={person.name}
              department={person.department}
              area={person.area}
              email={person.email}
              website={person.website}
            />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h2" sx={{ color: "#660099", fontWeight: 800 }}>
        Governing Board
      </Typography>
      <Grid container justifyContent={"space-evenly"} spacing={3} mt={1} mb={1}>
        {governingBoard.map((person) => (
          <Grid item key={person.name}>
            <BioCard
              img={person.img}
              name={person.name}
              department={person.department}
              area={person.area}
              email={person.email}
              website={person.website}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
