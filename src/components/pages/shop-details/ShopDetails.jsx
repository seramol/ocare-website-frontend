import * as React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { ActivityOverlay } from "../../common/activity-overlay/ActivityOverlay";
import { Product } from "./components/Product";
import { PRODUCTS } from "../../../utils/constants";

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
        let proudcts = [];
        if (response.data.products) {
          const activeProducts = response.data.products.filter(
            (item) => item.status
          );
          proudcts = activeProducts.map((item) => {
            let productName = "";
            const pds = PRODUCTS.filter((pd) => pd.id === item.product_id);
            if (pds && pds.length) {
              productName = pds[0].name;
            }
            return {
              ...item,
              productName: productName,
            };
          });
        }
        const data = { ...response.data };
        setShopDetails({ ...data, products: proudcts });
        setIsLoadingData(false);
      }
    } catch {}
  };
  React.useEffect(() => {
    const shopId = new URLSearchParams(location.search).get("id");
    getShopDetails(shopId);
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
              <Grid item xs={4} key={item.product_id}>
                <Product
                  productId={item.product_id}
                  name={item.productName}
                  quantity={item.quantity}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};
