import React, { useEffect, useState } from "react";
import Title from "./Title";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
      // console.log(videos);
    });
  }, [searchTerm]);

  return (
    <>
      <div className="flex min-h-[90vh] flex-col overflow-hidden bg-black text-white md:flex-row">
        <section className="flex-2 min-w-[90vh] overflow-y-auto p-2">
          <Title searchTerm={searchTerm} />
          <Videos videos={videos} />
        </section>
      </div>
    </>
  );
};

export default SearchFeed;
