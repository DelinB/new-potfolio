import React, { useRef } from "react";
// import TopBar from "./components/TopBar";
import TopBar from "./components/Topbar.jsx"
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


import Experiance from "./pages/Experiance";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experianceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <TopBar
        onNavigate={(section) => {
          if (section === "home") scrollToSection(homeRef);
          if (section === "about") scrollToSection(aboutRef);
          if (section === "projects") scrollToSection(projectsRef);
          if (section === "experiance") scrollToSection(experianceRef);
          if (section === "contact") scrollToSection(contactRef);
        }}
      />
      <div ref={homeRef}>
<Home/>      </div>
      <div ref={aboutRef}>
        <About/>
      </div>
      <div ref={projectsRef}>
        <Projects/>
      </div>
      <div ref={experianceRef}>
        <Experiance/>
      </div>
      <div ref={contactRef}>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
