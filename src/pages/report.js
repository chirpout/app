import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import styles from './css/report.module.css';


class Report extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        return (
            <Container className={styles.maincontainer}>
            <div className={styles.introductiontext} data-aos="zoom-in">
                <h1>Report a workplace concern</h1>
                <hr />
                <h2 className={styles.explanationtitle}>How it works:</h2>
                <div className={styles.explanationtext}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </div>
                <div className={styles.buttoncontainer}>
                    <Button onClick={this.scrollToRef} className={styles.startbutton} outline size="lg">START</Button> 
                </div>
            </div>
            <div className={styles.surveycontainer} data-aos="fade-up">
                <iframe ref={this.myRef} className={styles.qualtrics} src="https://ischooluw.co1.qualtrics.com/jfe/form/SV_aa67eixcMktPOmh"></iframe>
            </div>
        </Container>
        );
    }

    scrollToRef = () => window.scrollTo(0, this.myRef.current.offsetTop);
}

export default Report;
