import { useEffect, useState } from "react";
import axios from "axios";
import { ThemeProvider } from "@mui/material";
import { customMuiTheme } from "./theme/customMuiTheme";
import { AppView } from "./AppView";
import { ActivityOverlay } from "./components/common/activity-overlay/ActivityOverlay";
import { setLocations, setProducts } from "./utils/constants";

function App() {
  const [loadingData, setLoadingData] = useState(true);
  const loadData = async () => {
    try {
      const locations = await axios.get("http://localhost:3200/api/locations");
      const products = await axios.get("http://localhost:3200/api/products");
      if (locations && locations.data && products && products.data) {
        setLocations(locations.data);
        setProducts(products.data);
        setLoadingData(false);
      }
    } catch {}
  };
  useEffect(() => {
    loadData();
  }, []);

  if (loadingData) {
    return <ActivityOverlay />;
  }
  return (
    <ThemeProvider theme={customMuiTheme}>
      <AppView />
    </ThemeProvider>
  );
}

export default App;
