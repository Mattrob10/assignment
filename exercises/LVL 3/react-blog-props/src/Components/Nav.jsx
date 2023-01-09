import React from "react";

export default function Nav(){
  return(
    <nav className="navBar">
      <a href="#" className="navbar-brand">Start Bootstrap</a>
        <ul className="navbar-list">
                    <li className="navbar-item"><a href="index.html" className="navbar-link">HOME</a></li>
                    <li className="navbar-item"><a href="index.html" className="navbar-link">ABOUT</a></li>
                    <li className="navbar-item"><a href="index.html" className="navbar-link">SAMPLE POST</a></li>
                    <li className="navbar-item"><a href="index.html" className="navbar-link">CONTACT</a></li>
                </ul>

    </nav>
  )
}