import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row, NavLink, Card, CardBody } from "reactstrap";
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
        {/* <Container className={styles.container} data-aos="fade-up">
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
        </Container> */}


        <div className={styles.backgrounder}>
          <Container data-aos="fade-up" className={styles.container}>
            <Row>
              <Col className="d-flex align-items-center mb-4" sm={6}>
                <div>
                  <h1>Your concern,<br></br><span className={styles.heading}>Amplified.</span></h1>
                  <p className={styles.sub_header}>
                    Voice your concern privately and follow other concerns happening in the workplace. Contribute to creating healthier, happier and more productive work environments.
                  </p>
                  <Link to="/before" passHref>
                    <Button className={styles.btnheading} size='lg' component>VOICE YOUR CONCERN</Button>
                  </Link>
                </div>
              </Col>

              <Col sm={6}>
                <div className={styles.headerImg}></div>
              </Col>
            </Row>
          </Container>
        </div>


        <div data-aos="fade-up" className={styles.stepsSection}>
          <Container className='mb-5 pb-3'>
            <h3 className='mb-5 pb-5'>Voice your concern in just three steps.</h3>

            <Row>
              <Col className="d-flex align-items-center mb-4" sm='6'>
                <Card className={styles.shadow}>
                  <CardBody>
                    <Row className="row justify-content-start">
                      <Col sm={4}><p className={styles.center}><span className={styles.steps}>1.</span></p></Col>

                      <Col sm={8} className="d-flex align-items-center"><p>Fill in the blanks and describe your concern.</p></Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col sm='6'>
                <div className={styles.placeholder}></div>
              </Col>
            </Row>
          </Container>

          <Container className='mb-5 pb-3'>
            <Row>

              <Col sm='6' className='mb-4'>
                <div className={styles.placeholder}></div>
              </Col>

              <Col className="d-flex align-items-center" sm='6'>
                <Card className={styles.shadow}>
                  <CardBody>
                    <Row className="row justify-content-start">
                      <Col sm={4}><p className={styles.center}><span className={styles.steps}>2.</span></p></Col>

                      <Col sm={8} className="d-flex align-items-center"><p>Verify your workplace employment.</p></Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container className='mb-5 pb-5'>
            <Row>
              <Col className="d-flex align-items-center mb-4" sm='6'>
                <Card className={styles.shadow}>
                  <CardBody>
                    <Row className="row justify-content-start">
                      <Col sm={4}><p className={styles.center}><span className={styles.steps}>3.</span></p></Col>

                      <Col sm={8} className="d-flex align-items-center"><p>View your report’s status along with hundreds of others.</p></Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col sm='6'>
                <div className={styles.placeholder}></div>
              </Col>
            </Row>
          </Container>
        </div>


        <div className={styles.under}>
          <Container data-aos="fade-up" className={styles.lastCont}>
            <h3 className='mb-5 col-sm-8'><span className={styles.btmHead}>Elevate your workplace transparency for issues that matter to you.</span></h3>

            <Card>
              <CardBody>
                <Row className="row justify-content-start">
                  <Col sm={4}><div className={styles.bottomPlace}></div></Col>

                  <Col sm={8} className="ml-auto d-flex align-items-center">
                    <div>
                      <h3>Elevate your workplace transparency for issues that matter to you.</h3>
                      <Button className={styles.btnheading} size='lg' component>VOICE YOUR CONCERN</Button>
                    </div>

                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Container>

        </div>


        <footer>
          <div class="footer-copyright text-center py-3">© 2020 ChirpOut. All Rights Reserved.
          </div>
        </footer>


        {/* <Container className={styles.container} data-aos="fade-up">
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
        </Container> */}
      </div>
    );
  }
}

export default Home;
