import React, { Component } from "react";
import { Button, Container, Col, Row } from "reactstrap";
import styles from "./css/before.module.css";
import AOS from "aos";

import { Link } from "react-router-dom";



class Before extends Component {

    componentDidMount(props) {
        AOS.init({
            duration: 1200,
        });
    }

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        return (
            <div className='container-fluid colorz'>
                <Container data-aos="fade-up" className={styles.maincontainer}>
                    <h3 className='mb-5 pb-5'>3 steps to bring awareness to your concern:</h3>
                    <Row className='d-flex align-items-center justify-content-center'>
                        <Col sm='6' className='justify-content-end'>
                            <div className={styles.placeholder}></div>
                        </Col>

                        <Col sm='6'>
                            <Row className='pb-3 justify-content-start'>
                                <Col sm='2'><div className={styles.circle}>1</div></Col>
                                <Col sm='8' className='d-flex align-items-center'>
                                    <p className={styles.step}>
                                        Fill out the questionnaire and describe your concern.
                                    </p>
                                </Col>
                            </Row>

                            <Row className='pb-3 justify-content-start'>
                                <Col sm='2'><div className={styles.circle}>2</div></Col>
                                <Col sm='8' className='d-flex align-items-center'>
                                    <p className={styles.step}>
                                        Verify your workplace employment.
                                    </p>
                                </Col>
                            </Row>

                            <Row className='pb-3 justify-content-start'>
                                <Col sm='2'><div className={styles.circle}>3</div></Col>
                                <Col sm='8' className='d-flex align-items-center'>
                                    <p className={styles.step}>
                                        View your report’s status along With hundreds of others.
                                    </p>
                                </Col>
                            </Row>

                            <Link to="/report" passHref>
                                <Button className='btn-block btnColor mb-4' size='lg' component>GET STARTED</Button>
                            </Link>
                            <p className={styles.copyright}>By clicking GET STARTED, you agree to our Terms of Service and Privacy Policy.</p>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }

    scrollToRef = () => window.scrollTo(0, this.myRef.current.offsetTop);
}

export default Before;
