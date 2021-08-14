import React from "react";

// Music
import Sound from "react-sound";
import Falling from "../music/falling.mp3"

import { StyledMusicButton } from "./styles/StyledMusicButton";

const MusicButton = ({ callback, isPlayingMusic }) => (
  <StyledMusicButton
    onClick={() => {
      callback();
    }}
  >
  <Sound
    url = {Falling}
    playStatus = {
      isPlayingMusic ? Sound.status.PLAYING : Sound.status.STOPPED
    }
    playFromPosition={100} />

    {isPlayingMusic ? "Stop" : "Play"}
  </StyledMusicButton>
);

export default MusicButton;
