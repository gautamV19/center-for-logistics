import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

export default function BottomActionsCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 320,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar src="/static/images/avatar/1.jpg" size="lg" />
      </Box>
      <CardContent>
        <Typography level="title-lg">OptRoute Logistics</Typography>
        <Typography level="body-sm">
          I loved the product and the team. They were very responsive and helped
          me to setup the product in no time.
        </Typography>
      </CardContent>
    </Card>
  );
}
