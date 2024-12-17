import React from "react";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>

      {/* Contact Form */}
      <div className="contact-form-container">
        <input type="text" placeholder="srishabarijewellery@gmail.com" />
        <input type="text" placeholder="9865464701" />
        <button className="secondary-button">Submit</button>
      </div>

      {/* Instagram Section */}
      <div className="instagram-container">
        <div className="instagram-link-section">
          <FaInstagram className="instagram-icon" />
          <a
            href="https://www.instagram.com/srishabarijewellery?igsh=N3B4cGl3bjltanZ0"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            @shabarijewellery
          </a>
        </div>
        <button
          className="instagram-button"
          onClick={() =>
            window.open(
              "https://www.instagram.com/srishabarijewellery?igsh=N3B4cGl3bjltanZ0",
              "_blank"
            )
          }
        >
          Visit Instagram
        </button>
      </div>

      {/* WhatsApp Section */}
      <div className="whatsapp-container">
        <div className="whatsapp-link-section">
          <FaWhatsapp className="whatsapp-icon" />
          <a
            href="https://chat.whatsapp.com/E9IExGsSyZ47UpgSp394FG"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            Join Our WhatsApp Group
          </a>
        </div>
        <button
          className="whatsapp-button"
          onClick={() =>
            window.open("https://chat.whatsapp.com/E9IExGsSyZ47UpgSp394FG", "_blank")
          }
        >
          Visit WhatsApp Group
        </button>
      </div>

      {/* Navigate Us Section */}
      <div className="navigate-us-container">
        <div className="navigate-link-section">
          <FaMapMarkerAlt className="navigate-icon" />
          <a
            href="https://maps.app.goo.gl/5FK2LNnx2rgxVFsu7"
            target="_blank"
            rel="noopener noreferrer"
            className="navigate-link"
          >
            Find Us on Google Maps
          </a>
        </div>
        <button
          className="navigate-button"
          onClick={() =>
            window.open("https://maps.app.goo.gl/5FK2LNnx2rgxVFsu7", "_blank")
          }
        >
          Visit Google Maps
        </button>
      </div>
    </div>
  );
};

export default Contact;
