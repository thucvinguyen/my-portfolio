import React from "react";
import { Box, Button, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectCard({ title, imageUrl, demoUrl, githubUrl, description }) {
  return (
    <div>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography
          variant="h4"
          sx={{
            marginBottom: "10px",
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {title}
        </Typography>
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: "100%",
              borderRadius: "8px",
            }}
          />
        </a>

        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          {description}
        </Typography>
        <Box
          sx={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<LaunchIcon />}
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ marginRight: "10px" }}
          >
            Demo
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default ProjectCard;
