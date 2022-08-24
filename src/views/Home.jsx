import React from 'react'


export default function Home({img}){
  console.log(img)
  return (
    <div>
      <h1>Welcome to my personal page</h1>
      <p>I have always been very eager to learn and a nerd about programming and developing. So, if you want, contact me and I am sure I will be able to help your needs!</p>
      <img src={img} alt="gift"/>
    </div>
  )
}
