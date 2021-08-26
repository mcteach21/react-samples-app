import React, { useState } from "react";
import { NavLink as Link} from "react-router-dom";

import SimpleMenu from './menu.js';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-weight: bold;
    cursor: pointer;
    &.active {
      color:black;
    }
    &:hover {
      color: orangered;
    }
 `;

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">

            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/login"
            >
              Profil
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;