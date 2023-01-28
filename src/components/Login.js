import React, { useState } from "react";
import { loginUrl } from "../spotify";
import "../styles/Login.css";

function Login() {
  const [showBtn, setShowBtn] = useState(false);

  setTimeout(() => {
    setShowBtn(true);
  }, 4000);

  return (
    <div className="login">
      <img
        src="./Spotify_Logo.png"
        alt="spotify logo"
        className="login_logo showAnim"
      />
      <a href={loginUrl} className={showBtn && "show_a"}>
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
}

export default Login;
