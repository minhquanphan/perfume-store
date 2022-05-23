import * as React from "react";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BannerContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "20px 20px",
  background: "#fbf9f9",
}));

const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 600,
  padding: "30px",
}));

const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "600px",
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

function BannerThird() {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle
          variant="h8"
          component="h2"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          TOP PERFUMES
        </BannerTitle>
        <Typography
          variant="h8"
          fontStyle="italic"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          Social innovation legal
        </Typography>
        <BannerDescription variant="subtitle">
          Participatory monitoring convener public private partnerships grantees
          ransform democratizing the global financial system growth ocial
          entrepreneurship reduce child mortality pride social responsibility
        </BannerDescription>
      </BannerContent>
      <BannerImage src="/images/banner/bannerT.png" />
    </BannerContainer>
  );
}

export default BannerThird;
