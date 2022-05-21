import { Box } from "@mui/material";
import { Container } from "@mui/material";
import "./App.css";
import Controller from "./components/Controller";
import TrackList from "./components/TrackList";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

function App() {
  return (
    <MusicPlayerProvider>
      <Container>
        <Box
          sx={{
            maxWidth: "400px",
            backgroundColor: "#357f78",
            borderRadius: "70px",
            ml: "auto",
            mr: "auto",
            boxShadow: 3,
            p: "12px",
          }}
        >
          <TrackList />
        </Box>
      </Container>
    </MusicPlayerProvider>
  );
}

export default App;
