import React, { Component } from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./css/navigation.module.css";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" light expand="md" className={styles.nav}>
          <Link to="/" passHref>
            <NavbarBrand component="a">ChirpOut</NavbarBrand>
          </Link>
          <Nav className="ml-auto" navbar>
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
          </Link>
        </Navbar>
      </div>
    );
  }
}
