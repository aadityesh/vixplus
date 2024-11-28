import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import he from "he";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
} from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channelDetail, marginTop = "0px" }) => {
  return (
    <>
      <Box
        sx={{
          boxShadow: "none",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "356px", md: "320px" },
          marginTop: marginTop,
          color: "#fff",
        }}
      >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <CardMedia
              image={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              alt={channelDetail?.snippet?.title}
              sx={{
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                mb: 2,
                border: "1px solid #e3e3e3",
                color: "#fff",
              }}
            />
            <Typography variant="h6" fontWeight="bold">
              {channelDetail?.snippet?.title || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(
                  channelDetail?.statistics?.subscriberCount,
                  10,
                ).toLocaleString()}{" "}
                subscribers
              </Typography>
            )}
          </CardContent>
        </Link>
      </Box>
    </>
  );
};

export default ChannelCard;
