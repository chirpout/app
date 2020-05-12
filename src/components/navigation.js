import React, { Component } from "react";
import {
  Button,
  Navbar,
  NavbarBrand,

  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./css/navigation.module.css";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navCollapsed: true,
      showNavbar: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" light expand="md" className={styles.nav}>
          <Link to="/" passHref>
            <NavbarBrand component="a" className={styles.navHead}>ChirpOut</NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto d-flex align-items-center" navbar>
              <NavItem >
                <NavLink nav>
                  <Link to='/chirps' passHref>
                    Chirps
                </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link to='/' passHref>
                    Companies
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <Link to="/signup" passHref>
                  <Button outline component="a" className={styles.accountbutton}>
                    SIGN UP
                  </Button>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/login" passHref>
                  <Button outline component="a" className={styles.accountbutton}>
                    LOG IN
                  </Button>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>



          {/* <Nav className="ml-auto" navbar>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                LEARN MORE
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Workplace Verification</DropdownItem>
                <DropdownItem>Privacy Guarantee</DropdownItem>
                <DropdownItem>Terms of Use</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>

          <Link to="/login" passHref>
            <Button outline component="a" className={styles.accountbutton}>
              LOG IN
            </Button>
          </Link> */}
        </Navbar>
      </div>
    );
  }
}
