import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

export default function LicenseCard() {
  return (
    <Card
      variant="solid"
      color="primary"
      invertedColors
      sx={{
        boxShadow: "lg",
        width: 400,
        maxWidth: "100%",
        backgroundColor: "aliceblue",
      }}
    >
      <CardContent>
        <Typography level="title-lg" sx={{ color: "black" }}>
          Logistics Lab
        </Typography>
        <Typography level="subtitle-lg" sx={{ color: "black" }}>
          Software Developer
        </Typography>
        <Typography level="body-md" sx={{ color: "grey" }}>
          This is company introduction and This is the job description. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="solid">Apply</Button>
      </CardActions>
    </Card>
  );
}
