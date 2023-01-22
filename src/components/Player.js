import React from "react";
import "../styles/Player.css";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Body from "./Body";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <SideBar />
        <Body spotify={spotify} />
      </div>

      <Footer />
    </div>
  );
}

export default Player;
