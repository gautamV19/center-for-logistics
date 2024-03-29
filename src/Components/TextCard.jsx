import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function TextCard({ title, description }) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "aliceblue" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description.map((item) => (
            <List>
              <ListItem>
                <Typography variant="h6">{item}</Typography>
              </ListItem>
            </List>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
}
