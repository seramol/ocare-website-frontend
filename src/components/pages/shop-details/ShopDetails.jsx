import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Product } from "./components/Product";
import { Typography } from "@mui/material";

export const ShopDetails = () => {
  const [products, setProducts] = React.useState([1, 2, 3, 4, 5]);
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
              <Product name={"Test Product"} quantity="10" stockStatus={true} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
