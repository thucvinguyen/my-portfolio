import React from "react";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <NavBar />
      <Profile />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
