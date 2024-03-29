import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const [typedText, setTypedText] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const fullText = "Welcome to my portfolio! ⠀✧. *🧸🧺 യ 📻₊⋆";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#D7B98E" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                "&:hover": {
                  color: "#fff",
                  transition: "color 0.3s ease",
                  cursor: "pointer",
                },
              }}
            >
              {typedText}
            </Box>
          </Typography>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Button color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button color="inherit" onClick={() => scrollToSection("about")}>
              Profile
            </Button>
            <Button
              color="inherit"
              onClick={() => scrollToSection("background")}
            >
              Experience
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("project")}>
              Project
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          {["Profile", "Experience", "Project", "Contact"].map((text) => (
            <ListItem key={text}>
              <ListItemText
                primary={text}
                onClick={() => {
                  scrollToSection(
                    text.toLowerCase().split(" ").join("-") // Convert text to ID format
                  );
                  toggleDrawer(); // Close drawer after clicking on a link
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
