import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Form, FormControl, Nav, Navbar, NavItem } from "react-bootstrap";
import Routes from "../../routes/routes";
import { LinkContainer } from "react-router-bootstrap";
import * as FaIcons from "react-icons/fa";
import "./navbar.css";
import { SideNavData } from "./sideNav/SideNavData";
import { IconContext } from "react-icons";

export default function Navigation(props) {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(!sidebar);
    console.log(sidebar);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

  return (
    <div className="navigation">
      <Navbar fluid collapseOnSelect className="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="#">
              <FaIcons.FaBars onClick={showSideBar} />
              <span style={{ padding: "10px" }}>Tanu's Reaction to React</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <Form className="form-center">
                <FormControl
                  type="text"
                  placeholder="Pokemon Info"
                  className=""
                />
              </Form>
            </NavItem>
            {location.pathname.includes("/home") ||
            location.pathname.includes("/signup") ||
            location.pathname.includes("/login") ? (
              <>
                <LinkContainer to="/home">
                  <NavItem>Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              </>
            ) : (
              <>
                <LinkContainer to="/logout">
                  <NavItem>Logout</NavItem>
                </LinkContainer>
              </>
            )}
          </Nav>
          <IconContext.Provider value={{ color: "#fff" }}>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items">
                <li className="navbar-toggler nav-item">
                  <Link to="#" className="menu-bars">
                    <FaIcons.FaWindowClose
                      className="menu-icons"
                      onClick={showSideBar}
                    />
                  </Link>
                </li>
                {SideNavData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}
