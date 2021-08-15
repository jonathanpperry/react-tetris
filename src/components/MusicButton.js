import React, { useEffect, useState } from "react";

// Music
import Falling from "../music/falling.mp3";

import { PauseCircleFilled, PlayCircleFilled } from "@ant-design/icons";

import { StyledMusicButton } from "./styles/StyledMusicButton";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const MusicButton = () => {
  const [playing, toggle] = useAudio(Falling);
  return (
    <StyledMusicButton onClick={toggle}>
      {playing ? (
        <PauseCircleFilled style={{ fontSize: "40px", color: "#08c" }} />
      ) : (
        <PlayCircleFilled style={{ fontSize: "40px", color: "#08c" }} />
      )}
    </StyledMusicButton>
  );
};

export { MusicButton };
