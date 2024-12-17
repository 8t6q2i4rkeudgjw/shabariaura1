import React from "react";
import BannerBackground from "../Assets/homebanner2.png";
import BannerImage from "../Assets/srishabari2.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  // WhatsApp group link
  const whatsappGroupLink = "https://chat.whatsapp.com/E9IExGsSyZ47UpgSp394FG";

  const handleOrderNowClick = () => {
    // Open the WhatsApp group link in a new tab
    window.open(whatsappGroupLink, "_blank");
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Banner Background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">SRI SHABARI JEWELLERY</h1>
          <p className="primary-text">
            "At Shabari Jewellery, we take care of everything—designing, crafting,
            and perfecting every piece—so you can simply adorn yourself with elegance
            and shine effortlessly."
          </p>
          <button className="secondary-button" onClick={handleOrderNowClick}>
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Home;
