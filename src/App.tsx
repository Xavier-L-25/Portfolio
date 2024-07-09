import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import "./App.css";

function App() {
  return (
    <div className="c-bg-app">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Connect />
    </div>
  );
}

export default App;
