import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar } from "@mui/material";
import "../styles/Header.css";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

//   console.log(user);
  return (
    <div className="header">
      <div className="header_left">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search for Artists, Songs..." />
      </div>

      <div className="header_right">
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
