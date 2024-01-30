import React from "react";

const Footer = () => {
  const getDate = new Date();
  const getYear = getDate.getFullYear();
  return (
    <div className="footer">
      <div className="footer-top">
      <div className="footer-icon">
        <h3>FOLLOW US:</h3>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-google-plus-g"></i>
        </div>
        <div className="email-input">
          <input 
          type="text" 
          placeholder="Your email address"
          />
          <i class="fa-solid fa-paper-plane"></i>
        </div>
      </div>
      <div className="footer-middle">
        <div>
          <h1>Address</h1>
          <p>chennai, <br /> Tamilnadu.</p>
        </div>
        <div>
          <h1>Open Timing</h1>
          <p>Everyday</p>
          <p>7 am - 10 pm</p>
        </div>
        <div>
          <h1>Contact Us</h1>
          <p>email@gmail.com</p>
          <p>+91 0000-000-000</p>
        </div>
      </div>
      <p><i class="fa-solid fa-copyright"></i> {getYear} ALL RIGHT RESERVED BY VENGAT</p>
    </div>
  );
};

export default Footer;
