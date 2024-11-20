import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { categories } from "../utils/constants.js";

import SearchBar from "./SearchBar.jsx";

const NavBar = () => {
  return (
    <>
      <div className="sticky top-0">
        <div className="flex items-center justify-between gap-1 bg-black p-4 pt-[15px] text-white">
          <Link to={"/"}>
            <img
              className="h-[50px] w-[100px] rounded-md"
              src="/public/vix logo-dark.jpg"
              alt="logo"
            />
          </Link>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default NavBar;
