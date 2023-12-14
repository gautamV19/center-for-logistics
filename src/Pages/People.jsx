import React from "react";
import Grid from "@mui/material/Grid";
import BioCard from "../Components/BioCard";
import { faculty } from "../Assets/Data/peopleData";

export default function People() {
  return (
    <Grid container justifyContent={"space-evenly"} spacing={3} mt={3}>
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
  );
}
