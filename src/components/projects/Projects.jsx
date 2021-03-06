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
          {/* <div className="pinfone"> */}
          <h3>Upgrad(clone)</h3>
          <p>
            A clone of India's largest online higher education platform which provides many online free as well as paid courses.
            </p>
            {/* </div> */}
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . Javascript</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://upgrad-ravishukla86044.vercel.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/Shubham-047/Upgrad-Clone"> CODE</a></button>
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

      

           <div className="pcards">
        <div className="pimg">
          <img src={"assets/tumblr.png"} alt="" />
        </div>
        <div className="pinf">
          <h3>Tumblr(clone)</h3>
          <p>
           Tumblr is an American microblogging and social networking website founded in 2007. The service allows users to post multimedia and other content to a short-form blog.
          </p>
          <h4>Tech Stack</h4>
          <p>React . HTML5 . CSS3 . JavaScript . MongoDb . Mongoose . Express</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://tumblrclone.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href=" https://github.com/abhishekmah/Tumblr-Project"> CODE</a></button>
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
            <button><a target="_blank" href="https://clone-of-indeed.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/sheikhtausif/IndeedClone"> CODE</a></button>
          </div>
        </div>
          </div>
         

         
    </div>
  );
}
