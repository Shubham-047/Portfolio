import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Software Engineer", "Full-Stack Web Developer"],
    });
  }, []);

  return (
      <div className="intro" id="intro">
           <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Shubham Kumar</h1>
          <h3>
            a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/pic.jpg" alt="" />
        </div>
      </div>
     
    </div>
  );
}