import React from "react";

import { createTheme, PaletteMode } from "@mui/material";

export const useTheme = () => {
  const [mode, setMode] = React.useState< PaletteMode | undefined>("light");

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#fff"
      },
      secondary: {
        main: "#212529"
      }
    },
  });

  return { mode, setMode, theme };
};