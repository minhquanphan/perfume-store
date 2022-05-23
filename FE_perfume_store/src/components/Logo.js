import { Link as RouterLink } from "react-router-dom";
import { Avatar, Box } from "@mui/material";
import logoImg from "../logo.png";

function Logo({ disabledLink = false, sx }) {
  const logo = (
    <Avatar sx={{ width: 40, height: 40, ...sx }}>
      <img src={logoImg} alt="logo" width="170%" />
    </Avatar>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}

export default Logo;
