import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import { redirect, useNavigate } from "react-router-dom";

export default function BioCard({
  img,
  name,
  department,
  area,
  email,
  website,
}) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: 320,
        maxWidth: "100%",
        boxShadow: "lg",
        backgroundColor: "aliceblue",
      }}
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar src={img} sx={{ "--Avatar-size": "6rem" }} />
        <Typography level="title-lg">{name}</Typography>
        <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
          {department}
        </Typography>
        <Typography level="h5" sx={{ fontWeight: 600 }}>
          {area}
        </Typography>
        <Typography level="body" sx={{ color: "text.secondary" }}>
          {email}
        </Typography>
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.level1" }}>
        <CardActions buttonFlex="1">
          <ButtonGroup
            variant="outlined"
            sx={{ bgcolor: "background.surface" }}
          >
            <Button
              onClick={() =>
                navigate(
                  `/people/${name
                    .toLowerCase()
                    .split(" ")
                    .join("-")
                    .replace(".", "")}`
                )
              }
            >
              Learn More
            </Button>
            <Button
              onClick={() => {
                console.log(website);
                window.open(website, "_blank");
              }}
            >
              Website
            </Button>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
}
