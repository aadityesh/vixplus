import React from "react";

import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const iconMap = new Map([
  ["New", <HomeIcon />],
  ["Coding", <CodeIcon />],
  ["Music", <MusicNoteIcon />],
  ["Education", <SchoolIcon />],
  ["Podcast", <GraphicEqIcon />],
  ["Movie", <OndemandVideoIcon />],
  ["Gaming", <SportsEsportsIcon />],
  ["Live", <LiveTvIcon />],
  ["Sport", <FitnessCenterIcon />],
  ["Fashion", <CheckroomIcon />],
  ["Beauty", <FaceRetouchingNaturalIcon />],
  ["Comedy", <TheaterComedyIcon />],
]);

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      <Stack
        direction={"row"}
        className="sidebar"
        sx={{
          height: { sx: "auto", md: "95%" },
          width: {
            md: "125px",
            lg: "200px",
            sm: "100%",
          },
          position: "fixed",
          top: { sm: "70px", md: "90px" },
          marginBottom: { sm: "40px" },
          left: 0,
          flexDirection: { md: "column" },
          gap: "20px",
          overflowY: { md: "auto" },
          overflowX: { sm: "auto", md: "none" },
          padding: "4px",
          scrollbarWidth: "1px",
          backgroundColor: "black",
        }}
      >
        {Array.from(iconMap.entries()).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`flex cursor-pointer items-center rounded-xl p-2 ${selectedCategory == key ? "bg-orange-600" : "hover:bg-orange-600 hover:text-black"}`}
          >
            <span className="mr-3">{value}</span>
            <span>{key}</span>
          </button>
        ))}
      </Stack>
    </>
  );
};

export default SideBar;
