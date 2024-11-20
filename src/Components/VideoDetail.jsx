import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Title from "./Title.jsx";
import Videos from "./Videos.jsx";
import {
  CheckCircle,
  RemoveRedEye,
  ThumbUp,
  ViewAgenda,
  Visibility,
} from "@mui/icons-material";
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0]),
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items),
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  console.log(videoDetail);
  return (
    <>
      <Box minHeight="95vh" backgroundColor="black">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box
              sx={{
                width: "100%",
                position: "sticky",
                top: "86px",
                padding: "8px",
              }}
            >
              <ReactPlayer
                className="min-h-[70vh] min-w-[100%]"
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
              />
              <Typography
                sx={{
                  color: "white",
                  fontSize: "2rem",
                  marginTop: "8px",
                  paddingLeft: "6px",
                }}
              >
                {title}
              </Typography>
              <Stack
                direction="row"
                justifyContent={"space-between"}
                sx={{ color: "white" }}
                py={1}
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography color="#fff" paddingLeft="6px" margin="0">
                    {channelTitle}{" "}
                    <CheckCircle
                      fontSize="12px"
                      color="gray"
                      // marginLeft="3px"
                    />
                  </Typography>
                </Link>
                <Stack direction={"row"} gap="20px" alignItems="center">
                  <Typography sx={{ opacity: 0.7 }}>
                    <Visibility fontSize="12px" /> {viewCount.toLocaleString()}
                  </Typography>
                  <Typography sx={{ opacity: 0.7 }}>
                    <ThumbUp fontSize="12px" /> {likeCount.toLocaleString()}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Videos videos={videos} direction="column" />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default VideoDetail;
