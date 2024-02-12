import { Typography, Box } from "@mui/material";
import { PRODUCT_IMAGES } from "../../../../utils/productImages";

export const Product = ({ name, quantity, productId }) => {
  return (
    <Box
      sx={{
        borderColor: "#d3d3d3",
        border: 1,
        padding: "10px",
      }}
    >
      <img
        src={PRODUCT_IMAGES[productId] || PRODUCT_IMAGES.placeholder}
        alt="app-logo"
        height="130px"
        width="130px"
      />
      <Typography>{name}</Typography>
      <Typography>Quantity: {quantity}</Typography>
      <Typography>Stock:{quantity ? "Avialable" : "Outof stock"}</Typography>
    </Box>
  );
};
