import React, { Component } from "react";
import { Container, Row, Col, Form, Label, Input, Modal } from 'reactstrap';
import AOS from "aos";
import BasicExample from './elements/typeahead.js';
import Tags from './elements/tags.js';
import styles from "./css/companies.module.css";
import { Line } from 'react-chartjs-2';

import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

// const state = {
//     labels: ['Jan', 'Feb', 'Mar',
//         'Apr', 'May', 'Jun',
//         'Jul', 'Aug', 'Sep',
//         'Oct', 'Nov', 'Dec'],
//     datasets: [
//         {
//             label: 'Unique Chirps',
//             fill: false,
//             lineTension: 0.5,
//             backgroundColor: 'rgba(214,105,25,1)',
//             borderColor: 'rgba(214,105,25,1)',
//             borderWidth: 2,
//             data: [24, 30, 35, 22, 23, 42, 59, 30, 22, 22, 33, 39]
//         },

//         {
//             label: 'Total Chirps',
//             fill: false,
//             lineTension: 0.5,
//             backgroundColor: 'rgba(223,224,229,1)',
//             borderColor: 'rgba(223,224,229,1)',
//             borderWidth: 2,
//             data: [33, 39, 46, 45, 50, 22, 33, 50, 40, 30, 44, 59]
//         }
//     ]
// }

// let options= ['Microsoft', 'UW Medical', 'Virginia Mason', 'Google', 'Lyft', 'AirBNB', 'Uber', 'Amazon', 'Facebook'];



class Companies extends Component {

    constructor(props) {
        super()
        this.state = {
            selected:['UW Medical', 'Virginia Mason']
        }
        this.handleChange = this.handleChange.bind(this)

    }


    componentDidMount(props) {
        AOS.init({
            duration: 1200,
        });
    }

    handleChange (e) {
        // console.log(e);
        this.setState({selected: e});
    }

    render() {
        let options= ['Microsoft', 'UW Medical', 'Virginia Mason', 'Google', 'Lyft', 'AirBNB', 'Uber', 'Amazon', 'Facebook'];
        let map = {
            'Microsoft': [16, 20, 12, 25, 45, 33, 30, 44, 12, 20, 22, 22], 
            'UW Medical': [24, 30, 35, 22, 23, 42, 59, 30, 22, 22, 33, 39], 
            'Virginia Mason': [33, 39, 46, 45, 50, 22, 33, 50, 40, 30, 44, 59], 
            'Google': [2, 15, 22, 32,32,12,12,45,45,30,20,10], 
            'Lyft':[12,13,14,23,43,56,65,45,68,78,30,56], 
            'AirBNB':[10,12,34,23,33,44,54,67,76,87,43,67], 
            'Uber':[45,56,43,23,43,63,34,22,22,22,32,21], 
            'Amazon':[12,43,32,23,12,10,11,42,54,64,23,12], 
            'Facebook':[10,12,43,52,32,21,20,19,16,10,32,56]
        }

        
        
        const chart = {
            labels: ['Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: this.state.selected[0],
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(214,105,25,1)',
                    borderColor: 'rgba(214,105,25,1)',
                    borderWidth: 3,
                    data: map[this.state.selected[0]]
                },
        
                {
                    label: this.state.selected[1],
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,120,255,1)',
                    borderColor: 'rgba(75,120,255,1)',
                    borderWidth: 3,
                    data: map[this.state.selected[1]]
                }
            ]
        }
        return (
            <div data-aos="fade-up">
                <Container className='pt-5 my-5'>
                    <h3>Visualize Chirps Over Time</h3>
                    <hr />
                    <p>Search for a company and category to view the number chirps submitted over a period of time.</p>

                    <Row>
                        <Col xl='4'>
                            <div className={styles.search}>Search Workplaces</div>
                            <Typeahead
                                id="companies"
                                labelKey="Search Companies"
                                multiple
                                onChange={this.handleChange}
                                options={options}
                                placeholder="Search Companies..."
                                selected={this.state.selected}
                                size={'large'}
                            />
                        </Col>
                        <Col xl='3'>
                            <div className={styles.search}>Categories</div>
                            <Tags />
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <div>
                                <Line
                                    data={chart}
                                    options={{
                                        title: {
                                            display: true,
                                            text: '',
                                            fontSize: 20
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        },
                                        backgroundColor: 'black'
                                    }}
                                // width={'600px'}
                                // height={'600px'}
                                />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Companies;