import React from "react";
import "../styles/SideBarOptions.css";

function SideBarOptions({ title, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebar_icons" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SideBarOptions;
