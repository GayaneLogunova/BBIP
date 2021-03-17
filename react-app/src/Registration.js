import React, {Component} from "react";
import axios from 'axios'; 
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Form, Button} from "react-bootstrap";
import { Redirect } from "react-router";

class Registration extends React.Component {

  constructor(props) {
    super(props);
    this.state = {check: false, password: "", username: ""}
    this.postRequest = this.postRequest.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

    postRequest(e) {
        e.preventDefault();
        axios.post("/verify", {"username": this.state.username, "password": this.state.password}
        ).then((response) => this.setState({check: response.result}));
    }

    handleChangeUsername(event) {    
        this.setState({username: event.target.value});  
    }

    handleChangePassword (event) {    
        this.setState({password: event.target.value});  
    }

  render () {

    console.log(this.state.check);
    if (this.state.check) {
        console.log("ok");
        return <Redirect to="/"/>
    }
    return (
    <Card
    style={{marginLeft: "auto", marginRight: "auto", marginTop: "10%", marginBottom: "10%", width: "40%" }}>
        <Form style={{margin: "5%"}}>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control value={this.state.username} onChange={this.handleChangeUsername} type="username" placeholder="Enter username" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={this.state.password} onChange={this.handleChangePassword} type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.postRequest}>
                Submit
            </Button>
        </Form>
    </Card>
    )
  }
}

export default Registration;