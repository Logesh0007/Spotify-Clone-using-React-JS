import React from "react";
import Header from "./Header";
import { useStateValue } from "../StateProvider";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SongRow from "./SongRow";
import "../styles/Body.css";

function Body({ spotify }) {
  const [{ discoveryWeekly, songSelected }, dispatch] = useStateValue();
  // console.log(discoveryWeekly);

  return (
    <div className={`spotify_body ${songSelected ? "bodyFullHeight" : ""}`}>
      <Header spotify={spotify} />

      <div className="body_info">
        <img src={discoveryWeekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>{discoveryWeekly?.name}</h2>
          <p>{discoveryWeekly?.description}</p>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledOutlinedIcon className="spBody_play" />
          <FavoriteOutlinedIcon className="spBody_fav" />
          <MoreHorizOutlinedIcon />
        </div>

        {discoveryWeekly?.tracks?.items.map((item) => (
          <SongRow track={item?.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
