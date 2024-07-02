import React from "react";
import { Box, Button, Typography, Grid, Grow } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Profile() {
  return (
    <section id="about">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Grow in={true} timeout={1000}>
              <Box
                className="section__pic-container"
                sx={{
                  textAlign: "center",
                  padding: "20px",
                  cursor: "pointer",
                }}
              >
                <img
                  src="/profile.jpeg"
                  alt="profile"
                  style={{ maxWidth: "80%", borderRadius: "50%" }}
                />
              </Box>
            </Grow>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grow in={true} timeout={1000}>
              <Box
                className="section__text"
                sx={{ textAlign: "center", padding: "20px" }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Hello, I'm
                </Typography>
                <Typography variant="h3" className="title" sx={{ mb: 4 }}>
                  Vi Nguyen
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className="section__text__p1"
                  sx={{ mb: 2 }}
                >
                  As an aspiring front-end enthusiast, I'm driven by my passion
                  for crafting captivating web experiences. With skills in HTML,
                  CSS, and JavaScript, I'm committed to creating user-friendly
                  websites that captivate audiences. Eager to learn and grow,
                  I'm excited to contribute to dynamic projects and collaborate
                  with industry peers.
                </Typography>
                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    href="https://drive.google.com/file/d/1U8eEE0VBS26zbBl0Fp0lDGfXMfDviQbI/view?usp=sharing"
                    target="_blank"
                    sx={{
                      backgroundColor: "#D7B98E",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "#F9E4B7",
                        color: "#4E362A",
                        transform: "scale(1.1)",
                        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  >
                    Download CV
                  </Button>
                </Box>
                <Box id="socials-container" sx={{ textAlign: "center", mt: 4 }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Check out my social links!
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <a
                      className="nav-icon"
                      href="https://www.linkedin.com/in/thucvinguyen/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: "20px" }}
                    >
                      <LinkedInIcon sx={{ fontSize: 40, color: "#0077B5" }} />
                    </a>
                    <a
                      className="nav-icon"
                      href="https://github.com/thucvinguyen"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: "20px" }}
                    >
                      <GitHubIcon sx={{ fontSize: 40, color: "#333" }} />
                    </a>
                    <a
                      className="nav-icon"
                      href="https://www.facebook.com/haibaokeai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: "20px" }}
                    >
                      <FacebookIcon sx={{ fontSize: 40, color: "#3b5998" }} />
                    </a>
                    <a
                      className="nav-icon"
                      href="https://www.instagram.com/thucvvvvv/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: "20px" }}
                    >
                      <InstagramIcon sx={{ fontSize: 40, color: "#bc2a8d" }} />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Grow>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Profile;
