import React from "react";

// Music
import Sound from "react-sound";
import Falling from "../music/falling.mp3";

import { StyledMusicButton } from "./styles/StyledMusicButton";

const MusicButton = ({ callback, isPlayingMusic }) => (
  <StyledMusicButton
    onClick={() => {
      callback();
    }}
  >
    {isPlayingMusic ? "Pause" : "Play"}
  </StyledMusicButton>
);

const PlayMusic = React.memo(({ isPlayingMusic }) => {
  return (
    <Sound
      url={Falling}
      playStatus={isPlayingMusic ? Sound.status.PLAYING : Sound.status.PAUSED}
      loop={true}
      position={100}
    />
  );
});

export { MusicButton, PlayMusic };
