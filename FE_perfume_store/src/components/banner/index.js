import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "100px 100px",
  background: "#f8f4f0",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  // backgroundImage: `url(/images/banner/P.png)`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
}));

const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 500,
  padding: "10px",
}));

const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "460px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));

const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  lineHeight: 1.0,
  fontSize: "50px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

const BannerDescription = styled(Typography)(({ theme }) => ({
  fontFamily: "Courier New",
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

const BannerShopButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "color",
  name: "MyShopButton",
  slot: "Root",
})(({ theme }) => ({
  padding: "20px 0px",
  color: "black",
  fontWeight: "bold",
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
    fontSize: "14px",
  },
}));

function Banner() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <BannerContainer>
      <BannerContent>
        <Typography variant="h5" fontStyle="italic">
          New Collection 2022
        </Typography>
        <BannerTitle variant="h8" component="h2">
          FASHION WATCHES
        </BannerTitle>
        <BannerDescription variant="subtitle" color="#686868">
          Thinking cause international development Andrew Carnegie democratizing
          the global financial system invest. Beneficiaries reduce child
          mortality network board of.
        </BannerDescription>
        <BannerShopButton
          onClick={handleMenuClose}
          to="/product"
          component={RouterLink}
        >
          Shop
        </BannerShopButton>
      </BannerContent>
      <BannerImage src="/images/banner/P.png" />
    </BannerContainer>
  );
}

export default Banner;
