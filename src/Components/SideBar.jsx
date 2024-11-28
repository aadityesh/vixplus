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
      <section className="sidebar fixed left-0 flex w-full overflow-x-auto bg-black px-1 pt-[13px] lg:top-[85px] lg:w-[150px] lg:flex-col lg:gap-4">
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
      </section>
    </>
  );
};

export default SideBar;
