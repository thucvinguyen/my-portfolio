import React from "react";
import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#D7B98E",
        color: "#fff",
        py: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} All Rights Reserved. Designed by
        ReactJS and MUI
      </Typography>
      <Typography variant="body2">
        Made with ♡ by{" "}
        <Link
          href="https://www.facebook.com/haibaokeai/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          Vi Nguyen
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
