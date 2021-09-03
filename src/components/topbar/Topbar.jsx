import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GetAppIcon from '@material-ui/icons/GetApp';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src="favicon.ico" alt="" />
          </a>
          <div className="option">
            <div className="itemContainer,option">
           <span> Home</span>
                     
          </div>
          <div className="itemContainer">
           <span> About</span>
                     
          </div>
          <div className="itemContainer">
            <span>  Projects</span>
                     
                  </div>
                   <div className="itemContainer">
            <span>Contacts</span>
          
            
            </div>
               <div className="itemContainer">
              <span style={{ display: "flex" }}><GetAppIcon style={{height:"18px",margin:"2px",borderBottom:"none"}}/>  Resume</span>
          
            
            </div>
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
