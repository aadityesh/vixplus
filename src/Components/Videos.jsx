import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelDetail from "./ChannelDetail";

const Videos = ({ videos, direction = "row" }) => {
  return (
    // <Stack
    //   direction={`${direction}`}
    //   flexWrap="wrap"
    //   justifyContent="start"
    //   gap={2}
    // >
    //   {videos?.map((item, idx) => (
    //     <>
    //       <Box key={idx}>
    //         {item.id.videoId && <VideoCard video={item} />}
    //         {item.id.channelId && <ChannelDetail channelDetail={item} />}
    //       </Box>
    //     </>
    //   ))}
    // </Stack>

    <section className="grid w-full grid-cols-1 justify-center gap-2 p-2 md:grid-cols-2 md:gap-3 lg:w-fit lg:grid-cols-3 xl:grid-cols-4 xl:gap-2">
      {videos?.map((item, idx) => (
        <>
          <section className="flex items-center justify-center" key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelDetail channelDetail={item} />}
          </section>
        </>
      ))}
    </section>
  );
};

export default Videos;
