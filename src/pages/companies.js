import React, { Component } from "react";
import { Container, Row, Col, Card, CardTitle, CardBody, CardText, Button, CardFooter } from 'reactstrap';
import AOS from "aos";

import styles from "./css/companies.module.css";



class Companies extends Component {

    componentDidMount(props) {
        AOS.init({
            duration: 1200,
        });
    }

    render() {
        return (
            <div>
                <Container className='pt-5 my-5' data-aos="fade-up">
                    <h3>Visualize Chirps Over Time</h3>
                    <hr />
                    <p>Search for a company and category to view the number chirps submitted over a period of time.</p>


                </Container>
            </div>
        );
    }
}

export default Companies;