import { useRef } from "react";
import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import "./App.css";

function App() {
  const topRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const connectRef = useRef<HTMLElement>(null);

  return (
    <div>
      <Navbar
        refToAbout={aboutRef}
        refToSkills={skillsRef}
        refToConnect={connectRef}
      />
      <Intro ref={topRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Connect ref={connectRef} refToTop={topRef} />
    </div>
  );
}

export default App;
