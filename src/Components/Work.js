import React from "react";
import PickMeals from "../Assets/banagle.jpg";
import ChooseMeals from "../Assets/hand.jpg";
import DeliveryMeals from "../Assets/rings.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Bangle",
      text: "Shabari Jewellery's bangles are a perfect blend of elegance and tradition, designed to complement every occasion. Meticulously crafted with intricate details, our bangles showcase exceptional artistry and timeless beauty. Whether you prefer classic designs or contemporary styles, each bangle is made to reflect grace, sophistication, and individuality, ensuring they become an essential part of your jewellery collection",
    },
    {
      image: ChooseMeals,
      title: "chains",
      text: "Shabari Jewellery's chains are a testament to simplicity and sophistication. Designed with precision and crafted from the finest materials, our chains are versatile pieces that can be worn alone for a minimalistic look or paired with pendants to create a bold statement. Whether it's a traditional gold chain or a modern design, each piece reflects elegance, durability, and timeless charm, making it perfect for any occasion ",
    },
    {
      image: DeliveryMeals,
      title: "Rings",
      text: "Shabari Jewellery's rings are a symbol of love, elegance, and individuality. Each ring is crafted with precision and attention to detail, using the finest materials to create designs that range from timeless classics to contemporary masterpieces. Whether it's a sparkling diamond ring, a traditional gold band, or a statement piece, our rings are designed to celebrate life’s most cherished moments, adding a touch of brilliance to every occasion",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        "At Shabari Jewellery, we specialize in crafting timeless pieces that celebrate both tradition and modernity. Our artisans meticulously design and create jewellery that reflects elegance, purity, and individuality. From intricate traditional ornaments to contemporary masterpieces, each creation is made with the finest materials and utmost attention to detail. Shabari Jewellery is dedicated to providing exceptional quality, ensuring that every piece becomes a cherished symbol of beauty and emotion for our customers."
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
