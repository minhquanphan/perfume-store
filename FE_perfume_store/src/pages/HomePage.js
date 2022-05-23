import React from "react";

import { Container } from "@mui/material";
import Banner from "../components/banner";
import Promotions from "../components/promotions";
import BannerSecond from "../components/bannerSecond";
import BannerThird from "../components/bannerThird";
import PromotionsSecondary from "../components/promotions/promo";
import ProductPage from "./ProductPage";

function HomePage() {
  return (
    <Container maxWidth="x1" sx={{ background: "transparent" }}>
      <Banner />
      <Promotions />
      <BannerSecond />
      <PromotionsSecondary />
      <BannerThird />
      <PromotionsSecondary />
      <ProductPage />
    </Container>
  );
}

export default HomePage;
