import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact'
import Image from './images/gift.png'
import Error from './views/ErrorPage'
import Projects from './views/Projects'
import Navbar from './components/Navbar';
import ProjectsGames from './components/ProjectsGames';
import ProjectsApps from './components/ProjectsApps';
function App() {
  return (
    <div className="App">
      <Navbar ></Navbar>
      <Routes>
        <Route path="/" element={<Home img={Image}/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="error" element={<Error/>} />

        <Route  path="projects" element={<Projects/>}>
        <Route path="ProjectsGames" element={<ProjectsGames/>} />   
        <Route path="ProjectsApps" element={<ProjectsApps/>} />
        
        </Route>
        
      </Routes>
      
    </div>
  );
}
export default App;
