import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./config/theme";
import { RenderRoutes, ROUTES } from "./config/routes";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor: theme.palette.background.default }}>
        <RenderRoutes routes={ROUTES} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
