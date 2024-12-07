import React from "react";
import Navbar from "../components/Navbar";
import BannerSlick from "../components/BannerSlick";
import BannerIntro from "../components/BannerIntro";
import BannerService from "../components/BannerService";
import BannerTrain from "../components/BannerTrain";
import BannerTeam from "../components/BannerTeam";
import BannerContact from "../components/BannerContact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <BannerSlick />
      <BannerIntro />
      <BannerService />
      <BannerTrain />
      <BannerTeam />
      <BannerContact />
      <Footer />
    </>
  );
}

export default Home;
