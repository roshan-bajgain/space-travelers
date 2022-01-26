import React from "react";
import { NavLink } from "react-router-dom";
import planet from "../images/planet.png";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Rockets",
      name: "rockets",
    },
    {
      id: 2,
      path: "/missions",
      text: "Missions",
      name: "missions",
    },
    {
      id: 3,
      path: "/my-profile",
      text: "My Profile",
      name: "my-profile",
    },
  ];

  return (
    <nav className="navbar">
      <header className="logo-container">
        <img src={planet} alt="Logo" className="logo" />
        <h1 className="title"> Space Travelers & rsquo; Hub </h1>{" "}
      </header>{" "}
      <ul className="links">
        {" "}
        {links.map((link) => (
          <li key={link.id} className={link.name}>
            <NavLink exact to={link.path} activeClassName="active-link">
              {" "}
              {link.text}{" "}
            </NavLink>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </nav>
  );
};
export default Navbar;
