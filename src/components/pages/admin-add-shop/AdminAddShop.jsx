import * as React from "react";
import axios from "axios";
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
import { ActivityOverlay } from "../../common/activity-overlay/ActivityOverlay";
import { LOCATIONS } from "../../../utils/constants";

export const AdminAddShop = () => {
  const [isLoadingdata, setIsLoadingData] = React.useState(false);
  const [location, setLocation] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    let locationName = "";
    const loc = LOCATIONS.filter((item) => item.id === location);
    if (loc && loc.length) {
      locationName = loc[0].name;
    }
    const payload = {
      email: email,
      phoneNumber: phone,
      location: location,
      locationName: locationName,
      name: name,
      address: address,
    };

    setIsLoadingData(true);
    try {
      const response = await axios.post(
        `http://localhost:3200/api/admin/add-shop`,
        payload
      );
      if (response && response.data) {
        setName("");
        setLocation(1);
        setPhone("");
        setEmail("");
        setAddress("");

        setIsLoadingData(false);
      } else {
        setError(
          "Unable add shop, email or phone may be duplicate or invalid email"
        );
      }
    } catch {}
  };
  const handleLocationChange = (event) => {
    setError("");
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
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError("");
            }}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="shop-name"
            label="Shop Name"
            id="shop-name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setError("");
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="shop-number"
            label="Shop Phone Number"
            id="shop-number"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
              setError("");
            }}
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
                <MenuItem value={item.id} name={item.name} key={item.id}>
                  {item.name}
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
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
              setError("");
            }}
          />
          {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!name || !email || !location || !phone || !address}
          >
            Add Shop
          </Button>
        </Box>
      </Box>
      {isLoadingdata && <ActivityOverlay />}
    </Container>
  );
};
