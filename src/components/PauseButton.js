import React, { useState } from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const PauseButton = ({ callback, isPaused }) => (
  <StyledStartButton
    onClick={() => {
      callback();
    }}
  >
    {isPaused ? "Paused" : "Pause Game"}
  </StyledStartButton>
);

export default PauseButton;
