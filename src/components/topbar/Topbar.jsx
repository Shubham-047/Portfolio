import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
           SK
          </a>
          <div className="itemContainer">
           
                      About
          </div>
          <div className="itemContainer">
           
                      Contact
                  </div>
                   <div className="itemContainer">
           
                      Projects
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
