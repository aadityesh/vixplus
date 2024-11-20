import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelDetail from "./ChannelDetail";

const Videos = ({ videos, direction = "row" }) => {
  return (
    <Stack
      direction={`${direction}`}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos?.map((item, idx) => (
        <>
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelDetail channelDetail={item} />}
          </Box>
        </>
      ))}
    </Stack>
  );
};

export default Videos;
