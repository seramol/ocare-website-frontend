import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.jpg";

export const Intro = () => {
  return (
    <Box>
      Intro
      <Link to="/find-shops">
        <Box sx={{ maringTop: "100px" }}>
          <img src={logo} alt="app-logo" height="130px" width="130px" />
          <Typography>Get Started</Typography>
        </Box>
      </Link>
    </Box>
  );
};
