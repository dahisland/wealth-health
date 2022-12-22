import React from "react";
import logo from "../../assets/favicon.png";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <header className="pageHeader">
      <div className="pageHeader-container">
        <div>
          <NavLink to="/" end>
            <img src={logo} alt="logo HRnet" width="110px" height="110px" />
          </NavLink>
          <h1>Wealth Health</h1>
        </div>

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
            to="/employees-list"
            end
            className={(nav) =>
              nav.isActive ? "mainNav_link--active" : "mainNav_link"
            }
          >
            Employees list
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default MainNav;
