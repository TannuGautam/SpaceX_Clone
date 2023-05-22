import React from "react";
import "./Home.css";
import { ReactComponent as Mlogo } from "../assests/logo.svg";

const Home = () => {
  return (
    <div className="main-container">
      <div className="navbar">
        <Mlogo className="logo" />
        <div className="navSection">
          <div className="nav-items ">FALCON 9</div>
          <div className="nav-items ">FALCON HEAVY</div>
          <div className="nav-items ">DRAGON</div>
          <div className="nav-items ">STARSHIP</div>
          <div className="nav-items ">HUMAN SPACEFLIGHT</div>
          <div className="nav-items ">RIDESHARE</div>
          <div className="nav-items ">STARSHIELD</div>
          <div className="nav-items ">STARLINK</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
