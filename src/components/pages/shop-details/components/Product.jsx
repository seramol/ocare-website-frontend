import { Typography, Box } from "@mui/material";

export const Product = ({ name, quantity, stockStatus }) => {
  return (
    <Box
      sx={{
        borderColor: "#d3d3d3",
        border: 1,
        padding: "10px",
      }}
    >
      <Typography>{name}</Typography>
      <Typography>Quantity: {quantity}</Typography>
      <Typography>Stock:{stockStatus ? "Avialable" : "Outof stock"}</Typography>
    </Box>
  );
};
