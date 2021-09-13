import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="line"></div>
      <div className="pcards">
        <div className="pimg">
          <img src={"assets/upgradfu.png"} alt="" />
        </div>
        <div className="pinf">
          <h3>Upgrad(clone)</h3>
          <p>
            A clone of India's largest online higher education platform which provides many online free as well as paid courses.
          </p>
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . Javascript</p>
          <div className="card_btn">
            <button>DEMO</button>
            <button><a target="_blank" href="https://github.com/Shubham-047/Upgrad-Clone"> CODE</a></button>
          </div>
        </div>
          </div>
          

          <div className="pcards">
        <div className="pimg">
          <img src={"assets/indeed1.png"} alt="" />
        </div>
        <div className="pinf">
          <h3>Indeed(clone)</h3>
          <p>
            A clone of online Job search platform which provides a number of job opportunities for the jobseekers.
          </p>
          <h4>Tech Stack</h4>
          <p>React . Material-UI . Bootstrap . Styled-Components</p>
          <div className="card_btn">
            <button>DEMO</button>
            <button><a target="_blank" href="https://github.com/sheikhtausif/IndeedClone"> CODE</a></button>
          </div>
        </div>
          </div>
         

          <div className="pcards">
        <div className="pimg">
          <img src={"assets/pricelin1.png"} alt="" />
        </div>
        <div className="pinf">
          <h3>Priceline(clone)</h3>
          <p>
            A clone of online booking platform which offers users to book any hotels, cars , flights and cruises.
          </p>
          <h4>Tech Stack</h4>
          <p>React . Material-UI . Styled-Components . Json-Server</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://priceline-clone.vercel.app">DEMO</a></button>
            <button><a target="_blank" href=" https://github.com/devSudhir/Priceline-Clone"> CODE</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}
