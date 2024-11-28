import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  // console.log(channelDetail);
  // console.log(videos);f

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      // console.log(data);
      setChannelDetail(data?.items[0]);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items),
    );
  }, [id]);

  return (
    <>
      <Box minHeight={"95vh"} backgroundColor="black">
        <div
          style={{
            background:
              " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,102,9,1) 35%, rgba(0,212,255,1) 100%)",
            height: "200px",
          }}
        />
        <div className="flex min-w-[100%] items-center justify-center">
          <ChannelCard channelDetail={channelDetail} marginTop="-100px" />
        </div>
        <Box display="flex" p="2" color="#fff">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
};

export default ChannelDetail;
