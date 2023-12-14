import React from "react";
import { AppBar, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <motion.div
      animate={{ translateY: [200, 0], opacity: [0.3, 1] }}
      transition={{ duration: 1.5, ease: "linear" }}
    >
      <Grid
        container
        justifyContent="space-evenly"
        pt={3}
        pb={6}
        flexWrap="wrap"
        sx={{ backgroundColor: "#FFD099" }}
        mt={3}
      >
        <Grid item>
          <Typography variant="h5" color="#660099" fontWeight={500}>
            Email Us
          </Typography>
          <Link
            to="#"
            onClick={(e) => {
              window.location.href = "mailto:swamy@cse.iitm.ac.in";
              e.preventDefault();
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography variant="h6">swamy@cse.iitm.ac.in</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ color: "#660099" }}>
            Follow
          </Typography>

          <Grid item container spacing={1}>
            <Grid item>
              <Link
                to={{
                  pathname: "https://www.linkedin.com/in/gautamvaja13/",
                }}
                target="_blank"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <img
                  alt="LinkedIn"
                  src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/6ea5b4a88f0b4f91945b40499aa0af00.webp"
                  style={{ width: "26px", height: "26px" }}
                />
              </Link>
            </Grid>
            <Grid item>
              <Link
                to={{ pathname: "https://twitter.com/gautamvaja7" }}
                target="_blank"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <img
                  alt="Twitter"
                  src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp"
                  style={{ width: "26px", height: "26px" }}
                />
              </Link>
            </Grid>
            <Grid item>
              <Link
                to={{ pathname: "https://github.com/gautamV19" }}
                target="_blank"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <img
                  alt="Github"
                  src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                  style={{ width: "26px", height: "26px" }}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ color: "#660099" }}>
            © 2025 By Center For Logistics IIT Madras
          </Typography>
        </Grid>
      </Grid>
    </motion.div>
  );
}
