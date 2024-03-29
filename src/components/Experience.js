import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { styled } from "@mui/system";
import Skills from "./Skills";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

function Experience() {
  return (
    <section id="background">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "40px",
        }}
      >
        <Typography
          variant="h6"
          component="p"
          sx={{ mt: 3, mb: 2, color: "#333", textAlign: "center" }}
        >
          Get To Know More About
        </Typography>
        <Typography
          variant="h3"
          className="title"
          sx={{ mb: 3, color: "#333", textAlign: "center" }}
        >
          My Background
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={5}>
            <StyledPaper
              elevation={3}
              // sx={{
              //   textAlign: "left",
              //   display: "flex",
              //   flexDirection: "column",
              //   alignItems: "center",
              // }}
            >
              <SchoolIcon sx={{ fontSize: 30 }} />
              {/* <Typography
                variant="h5"
                sx={{ mt: 2, display: "flex", justifyContent: "center" }}
              >
                Education
              </Typography> */}
              <List sx={{ width: "100%", maxWidth: 360, ml: 5 }}>
                <ListItem sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ flex: "0 0 auto", mr: 2 }}>
                    <Typography variant="body1">Oct 2018 - Jan 2022</Typography>
                  </Box>
                  <ListItemText
                    primary="RMIT University Vietnam"
                    secondary="Bachelor of International Business"
                  />
                </ListItem>
                <ListItem sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ flex: "0 0 auto", mr: 2 }}>
                    <Typography variant="body1">Nov 2023 - May 2024</Typography>
                  </Box>
                  <ListItemText
                    primary="CoderSchool"
                    secondary="Full-stack Web Developer"
                  />
                </ListItem>
              </List>
            </StyledPaper>

            <StyledPaper
              elevation={3}
              sx={{
                mt: 3,
                // textAlign: "left",
                // display: "flex",
                // flexDirection: "column",
                // alignItems: "center",
              }}
            >
              <WorkIcon sx={{ fontSize: 30 }} />
              {/* <Typography
                variant="h5"
                sx={{ mt: 2, display: "flex", justifyContent: "center" }}
              >
                Working Experience
              </Typography> */}
              <List sx={{ width: "100%", maxWidth: 360, ml: 5 }}>
                <ListItem sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ flex: "0 0 auto", mr: 2 }}>
                    <Typography variant="body1">Nov 2021 - Feb 2022</Typography>
                  </Box>
                  <ListItemText
                    primary="Toyota Tsusho Vietnam"
                    secondary="Sales Assistant Intern"
                  />
                </ListItem>
                <ListItem sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ flex: "0 0 auto", mr: 2 }}>
                    <Typography variant="body1">Mar 2022 - May 2023</Typography>
                  </Box>
                  <ListItemText
                    primary="Taisun Vietnam"
                    secondary="Business Controller Executive"
                  />
                </ListItem>
              </List>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Skills />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Experience;
