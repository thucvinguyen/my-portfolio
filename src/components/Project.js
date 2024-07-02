import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "./projects/ProjectCard";

function Project() {
  return (
    <section id="project">
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
        <Typography variant="h6" sx={{ mb: 2 }}>
          Explore My
        </Typography>
        <Typography variant="h3" sx={{ mb: 4 }}>
          Projects
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box px={2}>
              <ProjectCard
                title="Customize Character"
                imageUrl="/project1.png"
                demoUrl="https://fancy-flan-d48382.netlify.app/"
                githubUrl="https://github.com/thucvinguyen/customize-character-game"
                description="Interactive web application where users can customize and randomize their own characters."
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box px={2}>
              <ProjectCard
                title="Movie App"
                imageUrl="/project2.png"
                demoUrl="https://stellar-puffpuff-0d99bc.netlify.app/"
                githubUrl="https://github.com/thucvinguyen/movie-appp"
                description="Platform designed for movie enthusiasts to explore, discover, and enjoy a wide range of films. Users can browse through an extensive catalog of movies, organized by genre, release date, popularity, and more."
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box px={2}>
              <ProjectCard
                title="GymSpace Project"
                imageUrl="/project3.png"
                demoUrl="https://stunning-truffle-539101.netlify.app/"
                githubUrl="https://github.com/thucvinguyen/final-fe"
                description="A full-stack website for new gymer to discover workout instructions, as well as tracking their fitness everyday."
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Project;
