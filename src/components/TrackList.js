import useMusicPlayer from "../hooks/useMusicPlayer";
import React from "react";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import HeadsetIcon from "@mui/icons-material/Headset";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { useContext } from "react";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";
import Controller from "./Controller";

function TrackList() {
  const {
    trackList,
    currentTrackName,
    playTrack,
    currentTrackIndex,
    isPlaying,
  } = useMusicPlayer();
  const x = useContext(MusicPlayerContext);
  console.log(x);
  return (
    <>
      <Container
        maxWidth="sm"
        // sx={{

        // }}
      >
        {" "}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <div className="song-title marquee">{currentTrackName}</div>
        </Box>
        <Stack spacing={2} sx={{ p: "12px", mb: "30px" }}>
          {trackList.map((track, index) => (
            <Box
              sx={{
                borderRadius: "16px",
                backgroundColor: "#b7deb8",
                "&:hover": {
                  opacity: [0.9, 0.8, 0.7],
                },
                p: "12px",
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => {
                playTrack(index);
              }}
            >
              <span>
                {index === currentTrackIndex && isPlaying ? (
                  <PauseCircleOutlineIcon />
                ) : (
                  <HeadsetIcon />
                )}
              </span>
              <div className="song-title">{track.name}</div>
            </Box> // ( Surprise us with your code here)
          ))}
          <Controller />
        </Stack>
        <Box></Box>
      </Container>
    </>
  );
}

export default TrackList;
