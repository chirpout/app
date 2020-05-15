
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
          <div className={styles.surveycontainer} data-aos="fade-up">
            <iframe ref={this.myRef} className={styles.qualtrics} src="https://ischooluw.co1.qualtrics.com/jfe/form/SV_aa67eixcMktPOmh"></iframe>
          </div>
        </div>

      </Container>
    );
  }

  scrollToRef = () => window.scrollTo(0, this.myRef.current.offsetTop);
}

export default Report;