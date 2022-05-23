import * as React from "react";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BannerContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "10px 10px",
  background: "#fbf9f9",
}));

const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 650,
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

function BannerSecond() {
  return (
    <BannerContainer>
      <BannerImage src="/images/banner/second_banner.png" />
      <BannerContent>
        <BannerTitle
          variant="h8"
          component="h2"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          NEW PERFUMES
        </BannerTitle>
        <Typography
          variant="h8"
          fontStyle="italic"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          Resources underprivileged
        </Typography>
        <BannerDescription variant="subtitle">
          Sanitation pathway to a better life immunize, nutrition, action global
          leaders humanitarian relief rural development civic engagement, Social
          analysis youth honor, sustainability effect rural
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}

export default BannerSecond;
