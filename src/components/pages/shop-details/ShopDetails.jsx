import * as React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { ActivityOverlay } from "../../common/activity-overlay/ActivityOverlay";

import { Product } from "./components/Product";

export const ShopDetails = () => {
  const location = useLocation();
  const [shopDetails, setShopDetails] = React.useState({});
  const [isLoadingdata, setIsLoadingData] = React.useState(false);

  const getShopDetails = async (shopId) => {
    setIsLoadingData(true);
    try {
      const response = await axios.get(
        `http://localhost:3200/api/shop-details?id=${shopId}`
      );
      if (response && response.data) {
        console.log("response ", response.data);
        setShopDetails(response.data);
        setIsLoadingData(false);
      }
    } catch {}
  };
  React.useEffect(() => {
    const shopId = new URLSearchParams(location.search).get("id");
    getShopDetails(shopId);
    console.log("ShopeId", shopId);
  }, []);

  if (isLoadingdata) {
    return <ActivityOverlay />;
  }
  return (
    <Box
      sx={{
        width: "100%",
        padding: "50px",
      }}
    >
      <Box sx={{ marginTop: "20px" }}>
        <Typography>{shopDetails.name}</Typography>
        <Typography>{shopDetails.email}</Typography>
        <Typography>{shopDetails.location_name}</Typography>
        <Typography>{shopDetails.phone}</Typography>
      </Box>

      <Typography
        sx={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}
      >
        Products
      </Typography>
      <Box sx={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          {shopDetails &&
            shopDetails.products &&
            shopDetails.products.map((item) => (
              <Grid item xs={4} key={item}>
                <Product
                  name={"Test Product"}
                  quantity="10"
                  stockStatus={true}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};
