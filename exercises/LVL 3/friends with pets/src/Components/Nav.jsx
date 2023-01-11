import React from "react";
import heart from '../assets/heart.png'

export default function Nav(){
  return(
    <nav className="navbar">
      <h1>We <img src={heart} alt="" className="heart"></img> Animals</h1>
    </nav>
  )
}