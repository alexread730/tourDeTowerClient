import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return(
    <header>
      <Navbar toggleable>
        <NavbarToggler />
        <a href="/"><h2>Tour De Towers</h2></a>
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="right-nav" href="/components/">Book Now</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
