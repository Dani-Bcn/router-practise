import React from 'react'
import Img from '../images/mando.png'

export default function ProjectsGames() {
  console.log(Img)
  return (
    <div>
      <h2>Games I have developed</h2>      
      <img src={Img} alt="Game play"/>
    </div>
  )
}
