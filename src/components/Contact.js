import React from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  // const handleButtonClick = () => {
  //   window.location.href = "mailto:thucvinguyen@gmail.com";
  // };

  return (
    <section id="contact">
      <Box sx={{ padding: "40px", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Get in Touch
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              margin="normal"
              color="primary"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              margin="normal"
              color="primary"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={6}
              margin="normal"
              color="primary"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              size="large"
              // onClick={handleButtonClick}
              sx={{
                mr: 3,
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
              Submit
            </Button>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Alternatively, you can{" "}
              <a
                href="mailto:thucvinguyen@gmail.com"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                click here
              </a>{" "}
              to send me a message via Gmail.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Contact;
