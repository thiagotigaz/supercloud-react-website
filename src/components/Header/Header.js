import React, {useState} from 'react';
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (

      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">
            Super Cloud
          </NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/thiagotigaz"
                         target="_blank">
                  Linkedin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://github.com/thiagotigaz" target="_blank">
                  Github
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>

  );
};
export default Header;
