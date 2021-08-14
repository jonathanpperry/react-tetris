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
    {isPlayingMusic ? "Play" : "Pause"}
  </StyledMusicButton>
);

const PlayMusic = React.memo(({isPlayingMusic}) => {
  return   <Sound
  url = {Falling}
  playStatus = {
    isPlayingMusic ? Sound.status.Paused : Sound.status.PLAYING
  }
  loop = {true}
  position={100} />;
})

export {
  MusicButton,
  PlayMusic
}
