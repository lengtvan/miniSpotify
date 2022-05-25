import { BottomNavigationAction } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useMusicPlayer from "../hooks/useMusicPlayer";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

function Controller() {
  const { isPlaying, togglePlay, playPreviousTrack, playNextTrack } =
    useMusicPlayer();
  return (
    <>
      <BottomNavigation
        showLabels
        sx={{
          cursor: "pointer",
          backgroundColor: "#598e89",
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
          borderRadius: "16px",
          mb: "16px",
        }}
      >
        <BottomNavigationAction
          icon={<ArrowBackIosIcon />}
          onClick={playPreviousTrack}
        />
        {isPlaying ? (
          <BottomNavigationAction
            icon={<PauseCircleFilledIcon />}
            onClick={togglePlay}
          />
        ) : (
          <BottomNavigationAction
            icon={<PlayArrowIcon />}
            onClick={togglePlay}
          />
        )}
        <BottomNavigationAction
          icon={<ArrowForwardIosIcon />}
          onClick={playNextTrack}
        />
      </BottomNavigation>
    </>
  );
}

export default Controller;
