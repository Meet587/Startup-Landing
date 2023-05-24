import React from "react";
import { NavItem, Navbar, NavLink, NavbarBrand, Nav } from "reactstrap";
import style from "./navbar.module.scss";
import logo from "../../asset/imgs/logo.svg";

const Navbar1 = () => {
  return (
    <Navbar className={`${style.navbar} navbar-light `}>
      <div>
        <NavbarBrand href="/">
          <img src={logo} alt="Startup" />
        </NavbarBrand>
      </div>
      <Nav>
        <NavItem>
          <NavLink to="/"> Home </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/services"> Services </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/roadmap"> Roadmap </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/downloads"> Downloads </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact"> Contact </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navbar1;
