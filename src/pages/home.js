import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row, NavLink } from "reactstrap";
import styles from "./css/home.module.css";
import AOS from "aos";

class Home extends Component {
  componentDidMount(props) {
    AOS.init({
      duration: 1200,
    });
  }

  render() {
    return (
      <div>
        <Container className={styles.container} data-aos="fade-up">
          <h1>Your concern, amplified</h1>
          <p>
            Contribute to our platform dedicated to increasing transparency in
            the workplace.
          </p>
          <div className={styles.buttons}>
            <Link to="/dashboard" passHref>
              <Button
                outline
                component="a"
                size="lg"
                className={styles.mainbutton}
              >
                FIND A WORKPLACE
              </Button>
            </Link>
            <Link to="/report" passHref>
              <Button
                outline
                component="a"
                size="lg"
                className={styles.mainbutton}
              >
                REPORT A CONCERN
              </Button>
            </Link>
          </div>
        </Container>
        <hr />
        <Container className={styles.container} data-aos="fade-up">
          <Row>
            <Col>
              <h3>REPORT SECURELY</h3>
              <p>
                Report your concerns with the reassurance that you are
                completely anonymous. We take your privacy and security
                seriously: learn more about our commitment and processes that
                ensure complete transparency.
              </p>
            </Col>
            <Col>
              <h3>BE HEARD</h3>
              <p>
                Our simple, fast reporting tool and verification system ensures
                your concerns get acknowledged immediately. Contribute to our
                open platform by admitting your concern to our data analysis
                tooling, so we can identify trends and notify you of your
                workplace health.
              </p>
            </Col>
            <Col>
              <h3>ANALYSE TRENDS</h3>
              <p>
                Track company, workplace, and regional trends over time. See
                current issues from verified professionals in your industry and
                department. Browse our data freely--get informed.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
