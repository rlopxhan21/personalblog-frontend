import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./Components/Header/Header";
import { HomePage } from "./Pages/HomePage";
import { DetailPage } from "./Pages/DetailPage";
import { AboutMePage } from "./Pages/AboutMePage";
import { Footer } from "./Components/Footer/Footer";
import { useTheme } from "./Theme/Theme";

import { ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import CssBaseline from "@mui/material/CssBaseline";

const App: React.FC = () => {
  const { mode, setMode, theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header mode={mode} setMode={setMode} />
      <Container>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/:postID" element={<DetailPage />} />
        </Routes>
        <Divider />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
