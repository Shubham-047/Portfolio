  
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"

import "./App.scss"
import { useState } from "react";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     
     <div className="sections">
       <Intro/>
      
      
     </div>
    </div>
  );
}

export default App;
