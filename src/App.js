import NameBox from "./components/NameBox";
import AboutMe from "./components/AboutMe";
import "./App.css";
import MyProjects from "./components/MyProjects";
import ProjectsTitle from "./components/ProjectsTitle";
import Navbar from "./components/Navbar";
import "./components/projects.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NameBox />

      <ProjectsTitle />

      <MyProjects />
    </div>
  );
}

export default App;
