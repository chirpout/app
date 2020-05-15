import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styles from "./css/login.module.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/auth';

class LogIn extends Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
      this.state = {
        email: null,
        password: null
      };
    }

    componentDidMount(props) {
        AOS.init({
          duration: 1200,
        });
      }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    };

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    };

    handleLogIn = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((userCredential) => {
                let firebaseUser = userCredential.user;
                console.log('User signed in: ' + firebaseUser.uid)
            })
            .catch((error) => { // report any errors
                console.log(error.message);
            })
    };

    render() {
        return (
        <div id='maindiv' className={styles.bg}>
            <div className={styles.form_wrapper}>
            <div className={styles.form} data-aos='fade-up'>
                <h3 className={styles.title}>Welcome Back</h3>
                <p className={styles.text}>Let your voice be heard. Sign in to report your workplace concerns.</p>
                <p className={styles.text}>New to ChirpOut? <a className={styles.a} href='/signup'>Join Now</a></p>
                <hr className='my-4'></hr>
                <Form>
                    <FormGroup>
                        <Input className={styles.input} value={this.state.email} onChange={this.handleEmailChange} type="email" name="email" id="logInEmail" placeholder="Work Email Address" />
                        <Input className={styles.input} value={this.state.password} onChange={this.handlePasswordChange} type="password" name="password" id="logInPassword" placeholder="Password" />
                    </FormGroup>
                    <Link to="/" passHref className='row justify-content-center'><Button onClick={this.handleLogIn} className={styles.button}>Log In</Button></Link>
                </Form>
            </div>
            </div>
        </div>
        );
    }
}

export default LogIn;