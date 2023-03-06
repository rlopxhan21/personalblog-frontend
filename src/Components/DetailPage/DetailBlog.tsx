import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import moment from "moment";

import { SkeletonLineView } from "../Layout/SkeletonLineView";
import { CustomCard } from "../Layout/CustomCard";
import { useGetDetailBlog } from "../../hooks/useGetDetailBlog";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Avatar, Button, Divider, Typography } from "@mui/material";

export const DetailBlog: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { blogData, isBlogLoading, blogError, fetchBlogData } =
    useGetDetailBlog();

  React.useEffect(() => {
    fetchBlogData(params?.postID);
  }, [fetchBlogData, params]);

  return (
    <Stack my={5} gap={4} maxWidth="100%">
      <Stack direction={{ xs: "column", md: "row" }} gap={2}>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => navigate(-1)}
          sx={{ borderRadius: 10, px: 2 }}
        >
          Back
        </Button>
        <Chip label="linux/terminal_commands" sx={{ px: 2 }} />
        <Chip label="Software Developer" sx={{ px: 2 }} />
      </Stack>
      <Typography variant="h4" letterSpacing={2} fontWeight={700}>
        {blogData?.title}
      </Typography>
      <Typography variant="body2"> {blogData?.header} </Typography>
      <Stack direction={"row"} gap={2} alignItems="center">
        <Avatar alt="No Image Found!" src={require("../../assests/pp.jpg")} />
        <Stack>
          <Typography variant="body2">by Ronish Lopxhan</Typography>
          {blogData && (
            <Typography variant="body2">
              {moment(new Date(blogData.updated)).format("LL")} --- 3 min read
            </Typography>
          )}
        </Stack>
      </Stack>
      <Box
        component={"img"}
        src={blogData?.imagefield}
        alt="No Image Found!"
        width={"100%"}
        maxHeight="400px"
        borderRadius={5}
      />
      {blogData && <ReactMarkdown>{blogData?.body}</ReactMarkdown>}
      <Divider />
      <Typography variant="h6">You might also like:</Typography>
      <Stack
        direction={"row"}
        flexWrap="wrap"
        justifyContent={"center"}
        gap={4}
        my={2}
      >
        {isBlogLoading && <SkeletonLineView />}
        {isBlogLoading && <SkeletonLineView />}
        {isBlogLoading && <SkeletonLineView />}
        {isBlogLoading && <SkeletonLineView />}
        {blogError && <Typography color={"error"}>404 Not Found!</Typography>}

        {/* <CustomCard />
      <CustomCard />
      <CustomCard /> */}
      </Stack>
    </Stack>
  );
};
