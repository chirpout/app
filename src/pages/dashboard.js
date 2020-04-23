import React, { Component, useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import styles from "./css/dashboard.module.css";

class Dashboard extends Component {
  render() {
    return (
      <Container className={styles.container}>
        <InputGroup className={styles.search}>
          <Input placeholder="Search" />
          <InputGroupAddon addonType="append">
            <Button>Go</Button>
          </InputGroupAddon>
        </InputGroup>
        <DashboardPanel></DashboardPanel>
      </Container>
    );
  }
}

const DashboardPanel = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Recent Chirps
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Industry Updates
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className={styles.rows}>
            <Col sm="12">
              <Card>
                <CardBody>
                  <CardTitle>Sexist Comments from Management</CardTitle>
                  <CardSubtitle>Microsoft - Redmond, WA</CardSubtitle>
                  <CardText>
                    A sharp upward trend in sexual harrassment complaints from
                    Microsoft's Washington offices.
                  </CardText>
                  <Button>View the data</Button>
                </CardBody>
                <CardFooter>
                  <p> Categories</p>
                  <Button outline size="sm">
                    Sexism
                  </Button>{" "}
                  <Button outline size="sm">
                    Harrassment
                  </Button>{" "}
                  <Button outline size="sm">
                    Discrimination
                  </Button>{" "}
                  <Button outline size="sm">
                    Management
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row className={styles.rows}>
            <Col sm="12">
              <Card>
                <CardBody>
                  <CardTitle>Healthcare Crisis</CardTitle>
                  <CardSubtitle>Whole Foods - Los Angeles, CA</CardSubtitle>
                  <CardText>
                    Reports of mishandling of sick employee's shifts and
                    healthcare coverage, as well as denied sick leave and unsafe
                    sanitary conditions.
                  </CardText>
                  <Button>View the data</Button>
                </CardBody>
                <CardFooter>
                  <p> Categories</p>
                  <Button outline size="sm">
                    Healthcare
                  </Button>{" "}
                  <Button outline size="sm">
                    Employee Health
                  </Button>{" "}
                  <Button outline size="sm">
                    Working Conditions
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row className={styles.rows}>
            <Col sm="12">
              <h2>Related Chirps</h2>
            </Col>
          </Row>
          <Row className={styles.rows}>
            <Col sm="6">
              <Card body>
                <CardTitle>Tax Fraud</CardTitle>
                <CardSubtitle>Facebook - Seattle, WA</CardSubtitle>
                <CardText>Lorem ipsum dolor</CardText>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Environmental Concerns</CardTitle>
                <CardSubtitle>Amazon - New York, NY</CardSubtitle>
                <CardText>Lorem ipsum dolor</CardText>
              </Card>
            </Col>
          </Row>
          <Row className={styles.rows}>
            <Col sm="6">
              <Card body>
                <CardTitle>Upper Management Abuse</CardTitle>
                <CardSubtitle>Google - Mountain View, CA</CardSubtitle>
                <CardText>Lorem ipsum dolor</CardText>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Poor Factory Conditions</CardTitle>
                <CardSubtitle>Boeing - Everett, WA</CardSubtitle>
                <CardText>Lorem ipsum dolor</CardText>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className={styles.rows}>
            <Col sm="12">
              <h4>
                Select an industry below or search for one above to view
                reports.
              </h4>
            </Col>
          </Row>
          <Row className={styles.rows}>
            <Col sm="12">
              <Button outline size="sm">
                Business
              </Button>{" "}
              <Button outline size="sm">
                Education
              </Button>{" "}
              <Button outline size="sm">
                Engineering - Civil
              </Button>{" "}
              <Button outline size="sm">
                Engineering - Software
              </Button>{" "}
              <Button outline size="sm">
                Engineering - Electrical
              </Button>{" "}
              <Button outline size="sm">
                Engineering - Hardware
              </Button>
            </Col>
          </Row>
          <Row className={styles.buttonrows}>
            <Col sm="12">
            <Button outline size="sm">
                Engineering - Management
              </Button>{" "}
              <Button outline size="sm">
                Healthcare
              </Button>{" "}
              <Button outline size="sm">
                Service - Restaurant
              </Button>{" "}
              <Button outline size="sm">
                Service - Personal Styling
              </Button>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Dashboard;
