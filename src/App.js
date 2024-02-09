import { ThemeProvider } from "@mui/material";
import { customMuiTheme } from "./theme/customMuiTheme";
import { AppView } from "./AppView";

function App() {
  return (
    <ThemeProvider theme={customMuiTheme}>
      <AppView />{" "}
    </ThemeProvider>
  );
}

export default App;
