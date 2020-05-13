import React, { Component } from "react";
import { Container, Row, Col, Card, CardTitle, CardBody, CardText, Button, CardFooter } from 'reactstrap';
import AOS from "aos";

// import lyft from "../components/imgs/lyft_logo.png";

import styles from "./css/chirps.module.css";



class Chirps extends Component {

    render() {
        return (
            <div className={styles.chirpBody}>
                <Container className='pt-5 my-5'>
                    <div>
                        Home / Dashboard / Chirps
                    </div>
                    <hr />
                    <h3 className={styles.black}>Recent Chirps</h3>
                    <hr />

                    <Row>
                        <Col xl='8'>
                            <Card>
                                <CardBody>
                                    <CardTitle tag='h4' className={styles.title}>Laid off as a recent employee</CardTitle>
                                    <div className={styles.company}>Lyft, Seattle WA</div>
                                    <div className={styles.stats}><i></i>1d 252 views</div>

                                    <CardText className={styles.chirpDet}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
                                    </CardText>
                                    <div>
                                        <div className='mb-4 small text-muted'>Categories</div>
                                        <Row>
                                            <Col xl='2'><Button outline size="sm">Management</Button></Col>
                                            <Col><Button outline size="sm">Inequality</Button></Col>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl='4'>
                            <h5>Workplaces Trending near you</h5>
                            <hr />

                            <Row className='align-items-center'>
                                <Col sm='3'>
                                    <img src={require('../components/imgs/lyft_logo.png')} className={styles.comp_img} />
                                </Col>

                                <Col className={styles.companyList}>
                                    <div className={styles.bold}>Lyft</div>
                                    <div>Seattle, WA</div>
                                </Col>
                            </Row>
                            <hr />

                            <Row className='align-items-center'>
                                <Col sm='3'>
                                    <img src={require('../components/imgs/amazon_logo.png')} className={styles.comp_img} />
                                </Col>

                                <Col className={styles.companyList}>
                                    <div className={styles.bold}>Amazon</div>
                                    <div>Seattle, WA</div>
                                </Col>
                            </Row>
                            <hr />

                            <Row className='align-items-center'>
                                <Col sm='3'>
                                    <img src={require('../components/imgs/microsoft_logo.png')} className={styles.comp_img} />
                                </Col>

                                <Col className={styles.companyList}>
                                    <div className={styles.bold}>Microsoft</div>
                                    <div>Redmond, WA</div>
                                </Col>
                            </Row>
                            <hr />

                            <Row className='align-items-center'>
                                <Col sm='3'>
                                    <img src={require('../components/imgs/google_logo.png')} className={styles.comp_img} />
                                </Col>

                                <Col className={styles.companyList}>
                                    <div className={styles.bold}>Google</div>
                                    <div>Kirkland, WA</div>
                                </Col>
                            </Row>
                            <hr />

                            <Row className='align-items-center'>
                                <Col sm='3'>
                                    <img src={require('../components/imgs/facebook_logo.png')} className={styles.comp_img} />
                                </Col>

                                <Col className={styles.companyList}>
                                    <div className={styles.bold}>Facebook</div>
                                    <div>Seattle, WA</div>
                                </Col>
                            </Row>
                            <hr />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <h3>Related Chirps</h3>
                    <Row className='mt-5 justify-content-md-center'>
                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <CardTitle className={styles.company}>Tax Fraud?</CardTitle>
                                        <div className={styles.footer_title}>Kirkland, WA</div>

                                    </CardBody>
                                </Card>
                            </Col>

                            <Col>
                                <Card>
                                    <CardBody>
                                        <CardTitle className={styles.company}>Tax Fraud?</CardTitle>
                                        <div className={styles.footer_title}>Kirkland, WA</div>

                                    </CardBody>
                                </Card>
                            </Col>

                            <Col>
                                <Card>
                                    <CardBody>
                                        <CardTitle className={styles.company}>Tax Fraud?</CardTitle>
                                        <div className={styles.footer_title}>Kirkland, WA</div>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Chirps;