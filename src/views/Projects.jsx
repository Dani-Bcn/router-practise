import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Projects() {
  return (
    <div>
       <div >
      <h1>My projects</h1>
      <p>I have separated my projects into two categories: games I have designed and developed, and applications I have programmed.</p>
       
      <NavLink to="/projects/ProjectsGames" >Games</NavLink>
      <NavLink to="/projects/ProjectsApps" >App</NavLink>
      <Outlet/>
   </div>
  
    </div>
   
  )
}
