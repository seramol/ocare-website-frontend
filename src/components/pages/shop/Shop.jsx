import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Product } from "./components/Product";
import { Typography } from "@mui/material";

export const Shop = () => {
  const [products, setProducts] = React.useState([1, 2, 3, 4, 5]);
  const [shopDetails, setShopDetails] = React.useState({});

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
  return (
    <Box
      sx={{
        width: "100%",
        padding: "50px",
      }}
    >
      <Box sx={{ marginTop: "20px" }}></Box>

      <Typography
        sx={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}
      >
        Products
      </Typography>
      <Box sx={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          {products.map((item) => (
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
    </Box>
  );
};
