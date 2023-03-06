import React from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const Intro: React.FC = () => {
  const onSubscribeHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <Stack mt={10} mb={5} gap={4}>
      <Typography variant="h4" fontWeight={700}>
        Hi there! Welcome to rlopxhan21 Blog.
      </Typography>
      <Stack component="form" noValidate gap={2} onSubmit={onSubscribeHandler}>
        <TextField label="Your Email Addresss..." variant="outlined" color="secondary" />
        <Typography variant="body1">
          Get our email newsletter with the ability to opt-out anytime. No
          sharing to 3rd party or spamming.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: 10 }}
          type="submit"
          color="secondary"
          id="post"
        >
          Subscribe
        </Button>
      </Stack>
    </Stack>
  );
};
