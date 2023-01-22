export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token: null,
  discoveryWeekly: null,
  playTrack: null,
  songSelected: false,
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };

    case "SET_DISCOVERY_WEEKLY":
      return {
        ...state,
        discoveryWeekly: action.discoveryWeekly,
      };

    case "SET_PLAY_TRACK":
      return {
        ...state,
        playTrack: action.playTrack,
      };

    case "SET_SONG_SELECT":
      return {
        ...state,
        songSelected: action.songSelected,
      };

    default:
      return state;
  }
};

export default reducer;
