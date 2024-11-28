import React from "react";
import he from "he";

import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  hexToRgb,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <>
      {/* <h1>hello</h1> */}
      <section className="w-[300px] rounded-md">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <img src={snippet?.thumbnails?.medium?.url} className="w-[300px]" />
        </Link>
        <section className="flex h-[80px] flex-col justify-between bg-[#1e1e1e] p-1">
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <p className="font-semibold">
              {" "}
              {he.decode(snippet?.title.slice(0, 60)) || demoVideoTitle}
            </p>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <p className="font-bold">
              {he.decode(snippet?.channelTitle) || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </p>
          </Link>
        </section>
      </section>
    </>
  );
};

export default VideoCard;
