import React from "react";
import ProfilePic from "../Assets/tester.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        "At Shabari Jewellery, we believe every piece tells a story of elegance and tradition. With unmatched craftsmanship and intricate designs, we create jewellery that adds brilliance to every moment of your life."
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "Our customers are the heart of Shabari Jewellery. Each piece we create is designed to bring joy, elegance, and meaning to their lives. Their trust and love inspire us to continue crafting timeless jewellery that tells their unique stories."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Shanmugam.p</h2>
      </div>
    </div>
  );
};

export default Testimonial;
