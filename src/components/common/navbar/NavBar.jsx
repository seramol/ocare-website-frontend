import {
  Container,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  AppBar,
} from "@mui/material";
import { Link } from "react-router-dom";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { theme } from "../../../theme/theme";

export function Navbar() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#F7F7FA",
          zIndex: (uitheme) => uitheme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth={false} style={{ padding: "0 2rem" }}>
          <Toolbar disableGutters>
            <Box display="flex" mr={2.5}>
              <Box
                bgcolor="#4554DAED"
                sx={{
                  // position: "absolute",
                  width: "19.01px",
                  height: "19.01px",
                  transform: "rotate(45deg)",
                }}
              />
              <Box
                bgcolor="#3C4486ED"
                sx={{
                  position: "absolute",
                  width: "19.01px",
                  height: "19.01px",
                  left: "8.11px",
                  transform: "rotate(45deg)",
                }}
              />
            </Box>
            <Link to="/find-shops">
              <Typography
                variant="caption"
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              >
                Life Supprt Finder
              </Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Box height="60px" />
    </>
  );
}
