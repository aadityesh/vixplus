import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Title from "./Title";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
      console.log(videos);
    });
  }, [selectedCategory]);

  return (
    <>
      <div className="flex min-h-[90vh] flex-col overflow-hidden bg-black text-white md:flex-row">
        <section className="min-w-[15%] md:border-r-2 md:border-slate-400">
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          {/* <p className="sticky">Copyright VixPlus Media Group</p> */}
        </section>
        <section className="flex-2 min-w-[90vh] overflow-y-auto p-2 pb-2 pl-4 pt-[42px] md:pt-0">
          <Title title={selectedCategory} />
          <Videos videos={videos} />
        </section>
      </div>
    </>
  );
};

export default Feed;
