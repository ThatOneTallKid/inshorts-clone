import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="#" target="__blank">
          Aditya Das
        </a>
      </span>
      <hr style={{ width: "90%" }} />
     
    </div>
  );
};

export default Footer;