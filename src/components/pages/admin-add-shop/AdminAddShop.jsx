import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { LOCATIONS } from "../../../utils/constants";

export const AdminAddShop = () => {
  const [location, setLocation] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(" Data ", data);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Shop
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="shop-email"
            label="Shop Email"
            id="shop-email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="shop-name"
            label="Shop Name"
            id="shop-name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="shop-number"
            label="Shop Phone Number"
            id="shop-number"
          />
          <FormControl sx={{ minWidth: "150px" }} fullWidth>
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="shop-address"
            label="Shop Address"
            id="shop-address"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Shop
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
