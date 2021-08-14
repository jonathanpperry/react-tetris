import React from "react";

import { StyledMusicButton } from "./styles/StyledMusicButton";

const MusicButton = ({ callback, isPlaying }) => (
  <StyledMusicButton
    onClick={() => {
      callback();
    }}
  >
    {isPlaying ? "Stop" : "Play"}
  </StyledMusicButton>
);

export default MusicButton;
