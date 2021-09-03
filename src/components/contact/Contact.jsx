// import { useState } from "react";
// import "./contact.scss";
// import "./contact.css";

// export default function Contact() {
//   const [message, setMessage] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMessage(true);
//   };
//   return (
//     <div className="contact" id="contact">
//       <div className="left">
//         <img src="assets/shake.svg" alt="" />
//       </div>
//       <div className="right">
//               <h2>Contact.</h2>

//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="Email" />
//           <textarea placeholder="Message"></textarea>
//           <button type="submit">Send</button>
//           {message && <span>Thanks, I'll reply ASAP :)</span>}
//         </form>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./contact.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

export default function About() {
  return (
    <div className="main">
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
                <EmailIcon />
              </div>

              <div className="icoL_icon">
                <LinkedInIcon />
              </div>

              <div className="icoL_icon">
                <GitHubIcon />
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
