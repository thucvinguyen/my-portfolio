import React, { useState, useEffect } from "react";
import { Box, Typography, LinearProgress, Grid, Grow } from "@mui/material";

function Skills() {
  const [progressValues, setProgressValues] = useState({
    HTML: 0,
    CSS: 0,
    Javascript: 0,
    ReactJS: 0,
    NodeJs: 0,
    English: 0,
    Chinese: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValues((prevValues) => {
        const updatedValues = { ...prevValues };
        for (const skill in updatedValues) {
          if (updatedValues[skill] < 100) {
            updatedValues[skill] += 5;
          }
        }
        return updatedValues;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "ReactJS",
    "NodeJs",
    "English",
    "Chinese",
  ];
  const middleIndex = Math.ceil(skills.length / 2);
  const skillsLeft = skills.slice(0, middleIndex);
  const skillsRight = skills.slice(middleIndex);

  return (
    <Box sx={{ marginTop: "40px" }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {skillsLeft.map((skill, index) => (
            <Grow in={true} timeout={500 + index * 100} key={skill}>
              <Box
                sx={{
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ marginRight: "10px" }}>
                  {skill}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={progressValues[skill]}
                  sx={{ flexGrow: 1 }}
                />
              </Box>
            </Grow>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          {skillsRight.map((skill, index) => (
            <Grow in={true} timeout={500 + index * 100} key={skill}>
              <Box
                sx={{
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ marginRight: "10px" }}>
                  {skill}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={progressValues[skill]}
                  sx={{ flexGrow: 1 }}
                />
              </Box>
            </Grow>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Skills;
