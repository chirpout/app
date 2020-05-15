import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styles from "./css/signup.module.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/auth';

class SignUp extends Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
      this.state = {
        email: null,
        username: null,
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

    handleUsernameChange = (e) => {
        this.setState({username: e.target.value});
    };

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    };

    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((userCredential) => {
                let firebaseUser = userCredential.user;
                console.log('User created: ' + firebaseUser.uid);
                let updatePromise = firebaseUser.updateProfile({
                    displayName: this.state.username
                });
                return updatePromise;
            })
            .catch((error) => { // report any errors
                console.log(error.message);
            })
            .then(() => {
                firebase.auth().currentUser.sendEmailVerification().then(function() {
                    console.log("Email sent");
                }).catch(function(error) {
                    console.log(error.message);
                });
            });
    };

    render() {
        return (
        <div id='maindiv' className={styles.bg}>
            <div className={styles.form_wrapper}>
            <div className={styles.form} data-aos='fade-up'>
                <h3 className={styles.title}>Create an Account</h3>
                <p className={styles.text}>By signing up you agree to ChirpOut's <a className={styles.a} href='/'>Terms of Service</a></p>
                <p className={styles.text}>Already have an account? <a className={styles.a} href='/login'>Log in</a></p>
                <hr className='my-4'></hr>
                <Form>
                    <FormGroup>
                        <Input className={styles.input} value={this.state.email} onChange={this.handleEmailChange} type="email" name="email" id="registerEmail" placeholder="Work Email Address" />
                        <FormText className={styles.input} color="muted">
                            Entering your work email verifies your employment. We won't share your email address with anyone.
                        </FormText>
                        {<Input className={styles.input} value={this.state.username} onChange={this.handleUsernameChange}  type="username" name="username" id="registerUsername" placeholder="Username" />}
                        <Input className={styles.input} value={this.state.password} onChange={this.handlePasswordChange} type="password" name="password" id="registerPassword" placeholder="Password" />
                    </FormGroup>
                    <Link to="/signupmessage" passHref className='row justify-content-center'><Button onClick={this.handleSignUp} className={styles.button}>Sign Up</Button></Link>
                </Form>
            </div>
            </div>
        </div>
        );
    }
}

export default SignUp;