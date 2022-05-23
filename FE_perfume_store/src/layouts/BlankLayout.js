import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Logo from "../components/Logo";
import { Stack } from "@mui/material";

const HeaderStyle = styled("header")(({ theme }) => ({
  top: "13%",
  left: "49%",
  transform: "translateX(-65%)",
  position: "absolute",
}));

function BlankLayout() {
  return (
    <Stack minHeight="100vh" justifyContent="center" alignItems="center">
      <HeaderStyle>
        <Logo sx={{ width: 71, height: 71 }} />
      </HeaderStyle>
      <Outlet />
    </Stack>
  );
}

export default BlankLayout;
