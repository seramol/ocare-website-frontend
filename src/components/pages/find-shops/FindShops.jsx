import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ActivityOverlay } from "../../common/activity-overlay/ActivityOverlay";
import { LOCATIONS, PRODUCTS } from "../../../utils/constants";
import { Shop } from "./components/Shope";

export const FindShops = () => {
  const [location, setLocation] = React.useState("");
  const [product, setProduct] = React.useState("");
  const [isLoadingdata, setIsLoadingData] = React.useState(false);
  const [shops, setShops] = React.useState([]);

  const handleSearch = async () => {
    setIsLoadingData(true);
    try {
      const response = await axios.get(
        `http://localhost:3200/api/shops?location=${location}&product=${product}`
      );
      if (response && response.data) {
        setShops(response.data);
        setIsLoadingData(false);
      }
    } catch {}
  };

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
                {item.name}
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
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          sx={{ marginLeft: "20px" }}
          variant="contained"
          disabled={!location || !product}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ padding: "50px" }}>
        <Grid container spacing={2}>
          {shops.map((item) => (
            <Grid item xs={4} key={item}>
              <Shop
                shopeId={item.id}
                name={item.name}
                location={item.location_name}
                phoneNumber={item.phone}
                address={item.address}
                stockStatus={true}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      {isLoadingdata && <ActivityOverlay />}
    </Box>
  );
};
