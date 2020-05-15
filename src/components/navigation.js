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
import firebase from 'firebase/app';
import 'firebase/auth';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      loggedIn: false,
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

  componentDidMount(props) {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  handleLogout() {
    firebase.auth().signOut()
      .catch(err => console.log(err));
  }

  render() {
    const isLoggedIn = this.state.loggedIn;
    let items;
    if (isLoggedIn) {
      var user = firebase.auth().currentUser;
      items = (
        <UncontrolledDropdown>
          <DropdownToggle caret>
            {user.displayName}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem><Link to="/" passHref onClick={this.handleLogout}>Log Out</Link></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>);
    } else {
      items = (
        <div>
          <NavItem className={styles.logInItems}>
            <Link to="/signup" passHref>
              <Button outline component="a" className={styles.accountbutton}>
                SIGN UP
              </Button>
            </Link>
          </NavItem>

          <NavItem className={styles.logInItems}>
            <Link to="/login" passHref>
              <Button outline component="a" className={styles.accountbutton}>
                LOG IN
              </Button>
            </Link>
          </NavItem>
        </div>);
    }
    console.log('Logged in: ' + isLoggedIn);
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
                  <Link to='/companies' passHref>
                    Companies
                  </Link>
                </NavLink>
              </NavItem>
              {items}
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
