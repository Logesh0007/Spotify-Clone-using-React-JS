import React from "react";
import "../styles/SideBarOptions.css";
import { useStateValue } from "../StateProvider";

function SideBarOptions({
  title,
  Icon,
  spotify,
  selectedPlaylist,
  setSelectedPlaylist,
}) {
  const [{ playlist }, dispatch] = useStateValue();

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebar_icons" />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <p
          style={{ color: selectedPlaylist === title && "white" }}
          onClick={(e) => {
            setSelectedPlaylist(e.target.innerHTML);

            playlist?.items.map(
              (item) =>
                e.target.innerHTML === item.name &&
                spotify.getPlaylist(item?.id).then((res) =>
                  dispatch({
                    type: "SET_DISCOVERY_WEEKLY",
                    discoveryWeekly: res,
                  })
                )
            );
          }}
        >
          {title}
        </p>
      )}
    </div>
  );
}

export default SideBarOptions;
