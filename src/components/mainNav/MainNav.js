import React from "react";
import logo from "../../assets/logo-HRnet.png";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <header className="pageHeader">
      <NavLink to="/" end>
        <img src={logo} alt="logo HRnet" />
      </NavLink>
      <nav className="pageHeader_mainNav">
        <NavLink
          to="/create-employee"
          end
          className={(nav) =>
            nav.isActive ? "mainNav_link--active" : "mainNav_link"
          }
        >
          Create employee
        </NavLink>
        <NavLink
          to="/current-employees"
          end
          className={(nav) =>
            nav.isActive ? "mainNav_link--active" : "mainNav_link"
          }
        >
          Current employees
        </NavLink>
      </nav>
    </header>
  );
};

export default MainNav;
