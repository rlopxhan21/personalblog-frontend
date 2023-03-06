import React from "react";

import { SearchModal } from "./SearchModal";
import { RouterLink } from "../Layout/RouterLink";

import {  PaletteMode } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";

import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";

const btnStyle = {
  borderRadius: 10,

};

interface Props {
  mode: PaletteMode | undefined,
  setMode: (data: PaletteMode | undefined) => void
}

export const Header: React.FC<Props> = ({mode, setMode}) => {
  const [search, setSearch] = React.useState<boolean>(false)

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <RouterLink to="/">
            <Typography variant="h6">rlopxhan21</Typography>
          </RouterLink>

          <Stack direction={"row"} alignItems="center" gap={2}>
            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              onClick={() => setSearch(true)}
              sx={{ ...btnStyle, px: { xs: 5, md: 20 } }}
              color="secondary"
              disabled
            >
              Search...
            </Button>
            <Button
              variant="contained"
              onClick={() => setMode(mode === 'light' ? "dark": 'light')}
              sx={{ ...btnStyle }}
              color="secondary"
            >
              <LightModeIcon />
              <Typography variant="button" display={{xs:'none', md:"block"}}>Theme</Typography>
            </Button>
          </Stack>
        </Toolbar>
        <SearchModal search={search} setSearch={setSearch} />
      </Container>
    </AppBar>
  );
};
