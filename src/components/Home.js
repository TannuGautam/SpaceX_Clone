import React, { useState } from "react";
import { ReactComponent as Mlogo } from "../assests/logo.svg";
import SearchBar from "./SearchBar";
import Lrockets from "./Lrockets";
import Footer from "./Footer";
import { ReactComponent as Menubar } from "../assests/menu.svg";

const Home = () => {
  const [open, setOpen] = useState(true);
  const [btnName, setBtnName] = useState("Open");

  const handleOpen = () => {
    if (open) {
      setBtnName("Close");
      setOpen(false);
    } else {
      setBtnName("Open");
      setOpen(true);
    }
  };

  return (
    <div className="main-container">
      
      {/* <button onClick={handleOpen}>{btnName}</button> */}
      <Menubar onClick={handleOpen} className="menu-img mb-nav"/>
      <Mlogo className="logo" />
      <div
        className="navSection"
        
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

      <div className="sl">
        <SearchBar />
        <Lrockets />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
