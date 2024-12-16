import React, { useState } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/necklace.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleWatchVideoClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="about-section-container">
      {/* Background Image */}
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="Background" />
      </div>

      {/* Main Content */}
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="Necklace" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Jewellery That Completes Every Moment</h1>
        <p className="primary-text">
          "Welcome to Shabari Jewellery, where tradition meets innovation. Our
          craftsmanship celebrates timeless elegance, combining intricate designs
          with unparalleled quality. Each piece is a reflection of purity,
          uniqueness, and the beauty of Indian heritage, curated to adorn your most
          cherished moments."
        </p>
        <p className="primary-text">
          "Every piece of jewellery at Shabari embodies sophistication and grace.
          With attention to detail and a passion for perfection, we craft designs
          that seamlessly blend tradition and modernity, ensuring they become a
          cherished part of your story."
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button
            className="watch-video-button"
            onClick={handleWatchVideoClick}
          >
            <BsFillPlayCircleFill style={{ marginRight: "8px" }} /> Watch Video
          </button>
        </div>
      </div>

      {/* Video Popup */}
      {showVideo && (
        <div className="video-popup-container">
          <div className="video-popup">
            <video
              src={require("../Assets/shabarivideo.mp4")}
              controls
              autoPlay
              width="800"
            />
            <button
              className="close-video-button"
              onClick={handleCloseVideo}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
