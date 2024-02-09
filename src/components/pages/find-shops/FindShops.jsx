import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { LOCATIONS, PRODUCTS } from "../../../utils/constants";
import { Shop } from "./components/Shope";

export const FindShops = () => {
  const [location, setLocation] = React.useState("");
  const [product, setProduct] = React.useState("");
  const [shops, setShops] = React.useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          // height: "100px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          // backgroundColor: "red",
        }}
      >
        <FormControl sx={{ minWidth: "150px" }}>
          <InputLabel id="demo-simple-select-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location}
            label="Location"
            onChange={handleLocationChange}
          >
            {LOCATIONS.map((item) => (
              <MenuItem value={item.id} key={item.id}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: "150px", marginLeft: "20px" }}>
          <InputLabel id="demo-simple-select-label">Products</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={product}
            label="Products"
            onChange={handleProductChange}
          >
            {PRODUCTS.map((item) => (
              <MenuItem value={item.id} key={item.id}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          sx={{ marginLeft: "20px" }}
          variant="contained"
          disabled={!location || !product}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ padding: "50px" }}>
        <Grid container spacing={2}>
          {shops.map((item) => (
            <Grid item xs={4} key={item}>
              <Shop
                shopeId={1}
                name={"Test Shopw"}
                location="Test Location"
                phoneNumber={"1234567890"}
                address={"Sample Address"}
                stockStatus={true}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
