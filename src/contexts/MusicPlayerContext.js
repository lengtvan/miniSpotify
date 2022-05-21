import React, { useState } from "react";
import Track1 from "./Forest_Lullaby.mp3";
import Track2 from "./Into_The_Night.mp3";
import Track3 from "./Spirit_Blossom.mp3";
import Track4 from "./cinematic-fairy-tale-story-main-8697.mp3";
import Track5 from "./far-from-home-acoustic-version-13463.mp3";
import Track6 from "./morning-garden-acoustic-chill-15013.mp3";
import Track7 from "./sedative-110241.mp3";
import Track8 from "./the-cradle-of-your-soul-15700.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Forest Lullaby",
      file: Track1,
    },
    {
      name: "Into The Night",
      file: Track2,
    },
    {
      name: "Spirit Blossom",
      file: Track3,
    },
    {
      name: "Fairy Tale",
      file: Track4,
    },
    {
      name: "Far from home",
      file: Track5,
    },
    {
      name: "Morning Garden",
      file: Track6,
    },
    {
      name: "Sedative",
      file: Track7,
    },
    {
      name: "The cradle of your soul",
      file: Track8,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
