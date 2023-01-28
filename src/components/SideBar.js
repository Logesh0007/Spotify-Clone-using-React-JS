import React, { useState } from "react";
import "../styles/SideBar.css";
import SideBarOptions from "./SideBarOptions";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import { useStateValue } from "../StateProvider";

function SideBar({ spotify }) {
  const [{ playlist }, dispatch] = useStateValue();
  const [selectedPlaylist, setSelectedPlaylist] = useState("");

  return (
    <div className="sidebar">
      <img
        src="./Spotify_Logo.png"
        alt="spotify logo"
        className="sidebar_logo"
      />
      <SideBarOptions title="Home" Icon={HomeOutlinedIcon} />
      <SideBarOptions title="Search" Icon={SearchOutlinedIcon} />
      <SideBarOptions title="Your Library" Icon={LibraryMusicOutlinedIcon} />
      <br />
      <strong className="sidebar_title">Playlists</strong>
      <hr />

      {playlist?.items?.map((playlistItems) => (
        <SideBarOptions
          title={playlistItems.name}
          spotify={spotify}
          selectedPlaylist={selectedPlaylist}
          setSelectedPlaylist={setSelectedPlaylist}
        />
      ))}
    </div>
  );
}

export default SideBar;
