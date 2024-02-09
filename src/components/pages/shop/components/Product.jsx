import { useState } from "react";
import { Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

export const Product = ({
  productId,
  name,
  quantity,
  productStatus,
  onProductStatusChange,
  onProductQuantityChange,
}) => {
  const [checked, setChecked] = useState(productStatus);
  const [productQuantity, setProductQuantity] = useState(quantity);

  //   useEffect(() => {
  //     setChecked(productStatus);
  //   }, [productStatus]);

  //   useEffect(() => {
  //     setProductQuantity(productQuantity);
  //   }, [productQuantity]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onProductStatusChange(productId, event.target.checked);
  };
  return (
    <Box
      sx={{
        borderColor: "#d3d3d3",
        border: 1,
        padding: "10px",
      }}
    >
      <Checkbox checked={checked} onChange={handleChange} />
      <Typography>{name}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          maxHeight: "60px",
        }}
      >
        <Box sx={{ width: "80px" }}>
          <Typography>Stock: </Typography>
        </Box>

        <Box sx={{ widows: "100px", height: "60px" }}>
          <TextField
            sx={{ width: "80px", marginTop: 0 }}
            margin="normal"
            required
            type="number"
            name="shop-number"
            id="shop-number"
            value={productQuantity}
            onChange={(event) => {
              setProductQuantity(event.target.value);
              onProductQuantityChange(productId, event.target.value);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
