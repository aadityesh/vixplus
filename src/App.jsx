import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  NavBar,
  Feed,
  ChannelDetail,
  SearchFeed,
  VideoDetail,
} from "./Components";
import { Box } from "@mui/material";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Box>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
