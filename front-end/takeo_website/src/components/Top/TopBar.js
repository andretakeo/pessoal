import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
function TopBar() {
  return (
    <div>
      <div>
        <Navbar color="dark" dark expand fixed="top" full light>
          <NavbarBrand href="/">Takeo website</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/formacoes">Formações</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sobre">Sobre</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/andretakeo/">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Mais...
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavItem>
                      <NavLink
                        href="https://www.instagram.com/l.fujiwara/"
                        style={{ color: 'black' }}
                      >
                        Instagram
                      </NavLink>
                    </NavItem>
                  </DropdownItem>

                  <DropdownItem>
                    <NavItem>
                      <NavLink href="/email" style={{ color: 'black' }}>
                        Email
                      </NavLink>
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default TopBar;
