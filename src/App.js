import { useEffect } from "react";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import "./styles/App.css";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  // const [playlistId, setPlaylistId] = useState();
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlist: playlist,
        });

        playlist?.items?.map((playlistId) =>
          spotify.getPlaylist(playlistId?.id).then((res) =>
            dispatch({
              type: "SET_DISCOVERY_WEEKLY",
              discoveryWeekly: res,
            })
          )
        );
      });
    }
  }, []);

  return (
    <div className="App">
      {/* <Player spotify={spotify} /> */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
