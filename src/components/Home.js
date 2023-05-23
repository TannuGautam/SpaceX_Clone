import React, { useState } from "react";
import { ReactComponent as Mlogo } from "../assests/logo.svg";
import SearchBar from "./SearchBar";
import Lrockets from "./Lrockets";
import { ReactComponent as Menubar } from "../assests/menu.svg";
import { ReactComponent as XIcon } from "../assests/xicon.svg";

const Home = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="main-container">
      
      <Mlogo className="logo" />
      <div
        className={isMobile ? "nav-links-mobile":"navSection"}
        onClick={() => setIsMobile(false)}
      >
        <div className="nav-items ">FALCON 9</div>
        <div className="nav-items ">FALCON HEAVY</div>
        <div className="nav-items ">DRAGON</div>
        <div className="nav-items ">STARSHIP</div>
        <div className="nav-items ">HUMAN SPACEFLIGHT</div>
        <div className="nav-items ">RIDESHARE</div>
        <div className="nav-items ">STARSHIELD</div>
        <div className="nav-items ">STARLINK</div>
      </div>

      <button  className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)} > 
        {
          isMobile ? <XIcon className="xicon"/> : <Menubar/> 
        }
      </button>

      <div className="sl">
        <SearchBar />
        <Lrockets />
      </div>
    </div>
  );
};

export default Home;
