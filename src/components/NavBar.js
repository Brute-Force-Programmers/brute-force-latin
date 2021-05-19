import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <> 
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Brute Force Latin</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact/">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resources/">Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/learn/">Learn</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            Sapere aude
          </NavbarText>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
