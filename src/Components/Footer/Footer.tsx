import React from "react";

import { MUILink } from "../Layout/MUILink";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { RouterLink } from "../Layout/RouterLink";

export const Footer: React.FC = () => {
  return (
    <Stack my={5} gap={4}>
      <Box>
        <Typography variant="h6" fontWeight={600}>
          rlopxhan21
        </Typography>
        <Typography variant="body1">
          I write on my journey to Software Development career and topics
          relating to Software Development.
        </Typography>
      </Box>
      <Stack direction={"row"} justifyContent="space-between">
        <Stack gap={2} alignItems="center">
          <Typography variant="h6">Explore</Typography>
          <RouterLink
            to="/"
          >
            <Typography>Home</Typography>
          </RouterLink>
          <MUILink
            href="#post"
          >
            <Typography>Posts</Typography>
          </MUILink>
          <MUILink
          >
            <Typography sx={{textDecoration: 'line-through'}}>Category</Typography>
          </MUILink>
        </Stack>
        <Stack gap={2} alignItems="center">
          <Typography variant="h6">From Site</Typography>
          <RouterLink to="/aboutme">
            <Typography>About Me</Typography>
          </RouterLink>
          <MUILink>
            <Typography sx={{textDecoration: 'line-through'}}>Support Me</Typography>
          </MUILink>
        </Stack>
        <Stack gap={2} alignItems="center">
          <Typography variant="h6">Connect</Typography>
          <MUILink
            href="https://www.linkedin.com/in/ronishlopxhan/"
            target={"_blank"}
          >
            <Typography>LinkedIn</Typography>
          </MUILink>
          <MUILink href="https://github.com/rlopxhan21" target={"_blank"}>
            <Typography>GitHub</Typography>
          </MUILink>
          <MUILink
          >
            <Typography sx={{textDecoration: 'line-through'}}>RSS</Typography>
          </MUILink>
        </Stack>
      </Stack>
      <Typography textAlign={"center"}>&copy; 2023 rlopxhan21. All rights reserved.</Typography>
    </Stack>
  );
};
