import React from "react";
import { NavLink } from "react-router-dom";
import "./TopNav.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const TopNav = () => {
  const menuData = [
    {
      path: "/",
      name: "MIS Dashboard",
    },
    // {
    //   path: "/about",
    //   name: "About",
    // },
    // {
    //   path: "/contact",
    //   name: "contact",
    // },
    // {
    //   path: "/service",
    //   name: "service",
    // },
    // {
    //   path: "/Other",
    //   name: "Other",
    // },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav>
      <label className="logo">FAIR GROUP</label>
      <div className="bars">
        <FaBars onClick={toggle} />
      </div>
      {/* <div className="menu" style={{ left: isOpen ? "-100%" : "0" }}>
        {menuData.map((item) => (
          <NavLink to={item.path} key={item.name}>
            <div className="list_item">{item.name}</div>
          </NavLink>
        ))}
      </div> */}
    </nav>
  );
};

export default TopNav;
