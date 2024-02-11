import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Product } from "./components/Product";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../../utils/constants";
import { ActivityOverlay } from "../../common/activity-overlay/ActivityOverlay";
export const Shop = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [products, setProducts] = React.useState({});
  const [shopDetails, setShopDetails] = React.useState(null);
  const [isLoadingdata, setIsLoadingData] = React.useState(false);
  const [error, setError] = React.useState("");

  const getShopDetails = async (shopId) => {
    setIsLoadingData(true);
    try {
      const response = await axios.get(
        `http://localhost:3200/api/shop-details?id=${shopId}`
      );
      if (response && response.data) {
        console.log("response ", response.data);
        setShopDetails(response.data);
        if (!response.data.products || !response.data.products.length) {
          const details = {};
          PRODUCTS.forEach(
            (item) => (details[item.id] = { status: true, stock: 0 })
          );

          setProducts(details);
        } else {
          setProducts(response.data.products);
        }
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

  const handleUpdate = async (event) => {
    console.log("Product ", products);

    event.preventDefault();

    const payload = {
      shopId: state.id,
      products: products,
    };

    setIsLoadingData(true);
    try {
      const response = await axios.post(
        `http://localhost:3200/api/shop/update`,
        payload
      );
      if (response && response.data) {
        console.log("response ", response.data);
        setIsLoadingData(false);
      } else {
        setError("update error");
      }
    } catch {}
  };

  const handleProductStatusChange = (productId, status) => {
    const details = { ...products };
    details[productId].status = status;
    setProducts(details);
  };
  const handleProductQuantityChange = (productId, quantity) => {
    const details = { ...products };
    details[productId].stock = quantity;
    setProducts(details);
  };
  if (!state || !state.id) {
    navigate("/shop-login");
  }
  if (!shopDetails) {
    return <ActivityOverlay />;
  }
  // console.log("shopDetails ", shopDetails);
  // console.log("products ", products);
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
          {PRODUCTS.map((item) => (
            <Grid item xs={4} key={item.id}>
              <Product
                productId={item.id}
                productStatus={products[item.id].status}
                name={item.name}
                quantity={products[item.id].stock}
                onProductStatusChange={handleProductStatusChange}
                onProductQuantityChange={handleProductQuantityChange}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
      <Button
        sx={{ marginLeft: "20px", marginTop: "50px" }}
        variant="contained"
        onClick={handleUpdate}
      >
        Update
      </Button>
      {/* {isLoadingdata && <ActivityOverlay />} */}
    </Box>
  );
};
