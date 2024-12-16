import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Importing Instagram and WhatsApp icons from react-icons

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
        {/* Instagram Link */}
        <div className="instagram-link-section">
          <FaInstagram
            style={{ fontSize: "24px", color: "#E4405F", marginRight: "8px" }}
          />
          <a
            href="https://www.instagram.com/srishabarijewellery?igsh=N3B4cGl3bjltanZ0"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            @shabarijewellery
          </a>
        </div>

        {/* Button to Visit Instagram */}
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
        {/* WhatsApp Icon and Link */}
        <div className="whatsapp-link-section">
          <FaWhatsapp
            style={{ fontSize: "24px", color: "#25D366", marginRight: "8px" }}
          />
          <a
            href="https://chat.whatsapp.com/E9IExGsSyZ47UpgSp394FG" // Replace with your WhatsApp group link or personal number link
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            Join Our WhatsApp Group
          </a>
        </div>

        {/* Button to Redirect to WhatsApp Group */}
        <button
          className="whatsapp-button"
          onClick={() =>
            window.open("https://chat.whatsapp.com/E9IExGsSyZ47UpgSp394FG", "_blank") // Replace with your WhatsApp link
          }
        >
          Visit WhatsApp Group
        </button>
      </div>
    </div>
  );
};

export default Contact;
