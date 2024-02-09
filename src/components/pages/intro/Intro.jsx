import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Intro = () => {
  return (
    <Box>
      Intro
      <Link to="/find-shops">
        <Box sx={{ maringTop: "100px" }}>
          <Typography>Get Started</Typography>
        </Box>
      </Link>
    </Box>
  );
};
