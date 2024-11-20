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
      <Card
        sx={{
          width: { md: "320px", xs: "100%" },
          color: "white",
          borderRadius: 0,
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{
              width: {
                md: 358,
                sm: "100%",
              },
              height: 180,
            }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold">
              {he.decode(snippet?.title.slice(0, 60)) || demoVideoTitle}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle1" fontWeight="bold">
              {he.decode(snippet?.channelTitle) || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default VideoCard;
