

import React from "react";
import "./contact.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

export default function Contact() {
  return (
    <div className="main" id="contact">
      <div className="contact">
        <h1>Contact</h1>
        <div className="line"></div>
        <div className="contact_inf">
        <div className="parag">
          <h2>Just say Hi</h2>
          <p>
            I'M ALWAYS OPEN TO DISCUSS YOUR/MY PROJECT AND TALK ABOUT NEW
            THINGS.
          </p>

          <p>LET'T GET IN TOUCH AND MAKE SOMETHING AMAZING TOGETHER.</p>

          <div className="contact_icon">
            <div className="call">
              <div>Call me at:</div>
              <p>+91-9337822952</p>
            </div>
            <div className="icoL">
                <div className="icoL_icon">
                  
                   <a target="_blank" href="shubham1406kumar@gmail.com"><EmailIcon /></a>
                
              </div>

                <div className="icoL_icon">
                  <a target="_blank" href="https://www.linkedin.com/in/shubham-kumar-1478781b4/"><LinkedInIcon /></a>
                
              </div>

                <div className="icoL_icon">
                  <a target="_blank" href="https://github.com/Shubham-047"><GitHubIcon /></a>
                
              </div>
            </div>
          </div>
          </div>
          <div className="gif">
            <img src={"assets/email3.gif"} alt="" />
          </div>
          
</div>
      </div>
    </div>
  );
}
