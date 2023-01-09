import React from "react";

export default function Footer(){
  return(
    <footer className="footer">
      <div className="icons"></div>
      <div className="footer-icon">
      <h3><i class="fa-brands fa-twitter" id="f-icon"></i></h3>
      <h3><i class="fa-brands fa-facebook-f"id="f-icon"></i>
      </h3>
      <h3><i class="fa-brands fa-github"id="f-icon"></i></h3>
      </div>
      <h5 className="footer-text">Copyright © Matthew Robinson 2022</h5>
      
    </footer>
  )
}