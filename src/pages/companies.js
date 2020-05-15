import React, { Component } from "react";
import { Container, Row, Col, Form, Label, Input } from 'reactstrap';
import AOS from "aos";
import BasicExample from './elements/typeahead.js';
import Tags from './elements/tags.js';

import styles from "./css/companies.module.css";


class Companies extends Component {

    componentDidMount(props) {
        AOS.init({
            duration: 1200,
        });
    }

    render() {
        return (
            <div data-aos="fade-up">
                <Container className='pt-5 my-5'>
                    <h3>Visualize Chirps Over Time</h3>
                    <hr />
                    <p>Search for a company and category to view the number chirps submitted over a period of time.</p>

                    <Row>
                        <Col xl='4'>
                            <div className={styles.search}>Search Workplaces</div>
                            <BasicExample />
                        </Col>
                        <Col xl='3'>
                            <div className={styles.search}>Categories</div>
                            <Tags />
                        </Col>

                        <Col xl='2'>
                            <div className={styles.search}>Show Dates Range</div>
                            <Form>
                                <Input type="datetime" name="email" id="exampleEmail" size='lg' placeholder="01/01/2020" />
                            </Form>
                        </Col>

                        <Col xl='2'>
                        <div className={styles.search}>&nbsp;</div>

                            <Form>
                                <Input type="datetime" name="email" id="exampleEmail" size='lg' placeholder="01/01/2020" />
                            </Form>
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <div></div>
                        </Col>

                        <Col>
                            <div></div>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Companies;