import React, { useState } from "react";
import "../../style/Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import NavbarLeft from "./NavbarLeft";
import NavbarCenter from "./NavbarCenter";
import NavbarRight from "./NavbarRight";
import LoginSignupBtn from "./LoginSignupBtn";

function Navbar(props) {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <header>
      <div className="navbar">
        <NavbarLeft showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
        <NavbarCenter />
        <NavbarRight setSearchQuery={props.setSearchQuery} />{" "}
        {/* Pass setSearchQuery directly */}
        <LoginSignupBtn />
      </div>

      <Sidebar showSideNav={showSideNav} />
    </header>
  );
}

export default Navbar;
