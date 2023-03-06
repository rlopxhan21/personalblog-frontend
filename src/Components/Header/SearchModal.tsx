import React from "react";

import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { RouterLink } from "../Layout/RouterLink";

interface Props {
  search: boolean;
  setSearch: (data: boolean) => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const DUMMY_DATA = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

export const SearchModal: React.FC<Props> = ({ search, setSearch }) => {
  return (
    <Modal open={search} onClose={() => setSearch(false)}>
      <Container sx={{ ...style, width: "100%" }}>
        <Stack gap={4} mt={4}>
          <Stack direction={"row"} alignItems="center" gap={2}>
            <TextField label="Search..." fullWidth size="small" autoFocus />
            <Button variant="contained" color="secondary" sx={{px:10}}>Search</Button>
          </Stack>
          <Divider />
          <Stack gap={2} height="60vh" overflow={"scroll"}>
            {DUMMY_DATA.map((item) => (
              <RouterLink to="/" key={item.id}>
                <Stack
                  gap={2}
                  sx={{
                    border: "1px solid black",
                    borderRadius: 5,
                    "&:hover": {
                      border: "1px solid blue",
                    },
                  }}
                  px={4}
                  pt={2}
                >
                  <Typography variant="h6">TextField</Typography>
                  <Typography variant="body2">lorem ipsum*45</Typography>
                  <Divider />
                </Stack>
              </RouterLink>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Modal>
  );
};
