import React from "react";
import instagram_icon from "../Assets/instagram.png";
import pintrest_icon from "../Assets/pinterest.png";
import whatsapp_icon from "../Assets/whatsapp.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="" alt="" />
        <p>MELVAULT</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img style={{ width: "50px" }} src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img style={{ width: "50px" }} src={pintrest_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img style={{ width: "50px" }} src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @MELVAULT</p>
      </div>
    </div>
  );
};

export default Footer;
