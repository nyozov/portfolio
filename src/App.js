import NameBox from './components/NameBox';
import AboutMe from './components/AboutMe';
import './App.css';
import Scroll from './components/Scroll'
import MyProjects from './components/MyProjects';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import ProjectsTitle from './components/ProjectsTitle';
import './components/projects.css'

function App() {
  useEffect(()=> {
    Aos.init({ duration: 1200})
  }, [])
  return (
    <div className="App">
   <NameBox/>
   <AboutMe/>
   <ProjectsTitle/>
   
   <MyProjects/>
  
   <Scroll/>
    </div>
  );
}

export default App;
