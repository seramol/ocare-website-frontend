import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Product } from "./components/Product";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ActivityOverlay } from "../../common/activity-overlay/ActivityOverlay";
export const Shop = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [products, setProducts] = React.useState([1, 2, 3, 4, 5]);
  const [shopDetails, setShopDetails] = React.useState({});
  const [isLoadingdata, setIsLoadingData] = React.useState(false);

  console.log(" state ", state);

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
    if (state && state.id) {
      const shopId = state.id;
      getShopDetails(shopId);
    }
  }, []);

  React.useEffect(() => {
    const details = {};
    products.forEach((item) => (details[item] = { status: true, stock: 0 }));
    setShopDetails(details);
  }, [products]);

  const handleProductStatusChange = (productId, status) => {
    const details = { ...shopDetails };
    details[productId].status = status;
    setShopDetails(details);
  };
  const handleProductQuantityChange = (productId, quantity) => {
    const details = { ...shopDetails };
    details[productId].stock = quantity;
    setShopDetails(details);
  };
  if (!state || !state.id) {
    navigate("/shop-login");
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
                  productId={1}
                  productStatus={true}
                  name={"Test Product"}
                  quantity="10"
                  onProductStatusChange={handleProductStatusChange}
                  onProductQuantityChange={handleProductQuantityChange}
                />
              </Grid>
            ))}
        </Grid>
      </Box>

      <Button
        sx={{ marginLeft: "20px", marginTop: "50px" }}
        variant="contained"
      >
        Update
      </Button>
      {isLoadingdata && <ActivityOverlay />}
    </Box>
  );
};
