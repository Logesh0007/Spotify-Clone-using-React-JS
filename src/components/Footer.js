import React from "react";
import "../styles/Footer.css";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { Grid, Slider, Stack } from "@mui/material";
import { useStateValue } from "../StateProvider";

function Footer() {
  const [{ playTrack, songSelected }, dispatch] = useStateValue();

  return (
    <div className={`footer ${songSelected ? "moveTop" : ""}`}>
      <iframe
        title="song"
        style={{ borderRadius: "10px 10px 0 0" }}
        src={`https://open.spotify.com/embed/track/${playTrack?.id}?utm_source=generator`}
        width="100%"
        height="100%"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      {/* <div className="footer_left">
        <img
          src={playTrack?.album.images[2].url}
          alt="Album Img"
          className="foooter_albumImg"
        />
        <div className="footer_songInfo">
          <h4>{playTrack?.name}</h4>
          <p>
            {playTrack?.artists.map((artist) => artist.name).join(", ")} -{" "}
            {playTrack?.album.name}
          </p>
        </div>
      </div>

      <div className="footer_center">
        <ShuffleIcon className="footer_shuffle" />
        <SkipPreviousIcon className="footer_previous" />
        <PlayCircleFilledWhiteOutlinedIcon className="footer_play" />
        <SkipPreviousIcon className="footer_next" />
        <RepeatOutlinedIcon className="footer_repeat" />

        <div>
          <audio controls>
            <source src="http://localhost:3000/v1/tracks/spotify:track:4vlMdXsRpAIXYggwbNHZSv" />
          </audio>
        </div>
      </div>

      <div className="footer_right">
        <Grid container spacing={2} className="footer_grid">
          <Stack
            spacing={2}
            direction="row"
            sx={{ mb: 1 }}
            alignItems="center"
            className="footer_rightControls"
          >
            <VolumeDown />
            <Slider aria-label="Volume" />
            <VolumeUp />
          </Stack>
        </Grid>
      </div> */}
    </div>
  );
}

export default Footer;
