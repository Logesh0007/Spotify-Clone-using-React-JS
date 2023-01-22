import React from "react";
import "../styles/SongRow.css";
import { useStateValue } from "../StateProvider";

function SongRow({ track }) {
  const [{}, dispatch] = useStateValue();

  return (
    <div
      className="song_row"
      onClick={() => {
        dispatch({
          type: "SET_PLAY_TRACK",
          playTrack: track,
        });

        dispatch({
          type: "SET_SONG_SELECT",
          songSelected: true,
        });
      }}
    >
      <img src={track.album.images[2].url} alt="Artist" />
      <div className="song_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
