import React, { Component } from "react";
import AOS from "aos";
import styles from "./css/signupmessage.module.css";

class SignUpMessage extends Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }

    componentDidMount(props) {
        AOS.init({
          duration: 1200,
        });
    }

    render() {
        return (
            <div className={styles.text} data-aos='fade-up'>
                <h3>Thank you for registering!</h3>
                <p>To complete your workplace verification, please click on the link sent to your work email.</p>
            </div>
        );
    }
}

export default SignUpMessage;