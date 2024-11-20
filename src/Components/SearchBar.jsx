import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (searchInput != "") {
      navigate(`/search/${searchInput}`);
      setSearchInput("");
    }
  };
  return (
    <>
      <section className="flex min-w-[30%] items-center justify-center rounded-[15px] border border-black bg-slate-100">
        <input
          className="flex-1 rounded-[15px] p-2 text-black outline-none"
          placeholder="Search..."
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <section
          className="cursor-pointer pr-1 text-black"
          onClick={handleSubmit}
        >
          <Search />
        </section>
      </section>
    </>
  );
};

export default SearchBar;
