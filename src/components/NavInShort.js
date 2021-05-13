import React from "react";
import "./NavInShort.css";
import HamburgerDrawer from "./HamburgerDrawer";
import Button from '@material-ui/core/Button';


const NavInshort = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <HamburgerDrawer setCategory={setCategory} />
      </div>

      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80%"
        alt="logo"
      />


      <div className="signup">
        <a href="/signup" className="link">
      <Button variant="contained" color="secondary">
            Admin
      </Button>
          </a>
      
      </div>
    </div>
  );
};

export default NavInshort;