import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
export const Shop = ({
  shopeId,
  name,
  location,
  phoneNumber,
  address,
  lat,
  long,
  stockStatus,
}) => {
  return (
    <Link to={`/shop-details?id=${shopeId}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          borderColor: "#d3d3d3",
          border: 1,
          padding: "10px",
        }}
      >
        <Typography>{name}</Typography>
        <Typography>{location}</Typography>
        <Typography>{phoneNumber}</Typography>
        <Typography>{address}</Typography>
        <Typography>
          Stock:{stockStatus ? "Avialable" : "Outof stock"}
        </Typography>
      </Box>
    </Link>
  );
};
