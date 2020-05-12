import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignUp extends Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
  
    render() {
      return (
        <div className='mt-5 pt-5'>
            <Form>
                <FormGroup>
                    <Input type="email" name="email" id="registerEmail" placeholder="Work Email Address" />
                    <FormText color="muted">
                        Entering your work email verifies your employment. We won't share your email address with anyone.
                    </FormText>
                    <Input type="username" name="username" id="registerUsername" placeholder="Username" />
                    <Input type="password" name="password" id="registerPassword" placeholder="Password" />
                </FormGroup>
                <Button>Sign Up</Button>
            </Form>
        </div>
      );
    }

}

export default SignUp;