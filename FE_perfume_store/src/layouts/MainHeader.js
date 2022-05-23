import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Avatar, Divider, styled } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";

function MainHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      handleMenuClose();
      await logout(() => {
        navigate("/login");
      });
    } catch (error) {
      console.error(error);
    }
  };

  const menuId = "primary-search-account-menu";
  const renderUserMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Divider sx={{ borderStyle: "dashed" }} />

      <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
        Logout
      </MenuItem>
    </Menu>
  );

  const HeaderTitle = styled(Typography)(() => ({
    padding: "4px",
    flexGrow: 1,
    fontSize: "1em",
    fontFamily: "cursive",
    color: "white",
  }));

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <HeaderTitle>My Perfume</HeaderTitle>
        </Typography>
        <Button
          variant="h6"
          noWrap
          onClick={handleMenuClose}
          to="/"
          component={RouterLink}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          Home
        </Button>
        <Button
          variant="h6"
          noWrap
          onClick={handleMenuClose}
          to="/product"
          component={RouterLink}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          Products
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Avatar
            onClick={handleProfileMenuOpen}
            src="logo.png"
            alt={user.name}
            sx={{ width: 50, height: 50 }}
          />
        </Box>
        {renderUserMenu}
      </Toolbar>
    </AppBar>
  );
}

export default MainHeader;
