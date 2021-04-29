import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Main from "./Main";
import Navbar from "./NavBar";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isLogged: localStorage.getItem("authToken")}
    this.changeIsLogged = this.changeIsLogged.bind(this);

  }

  changeIsLogged(value) {
    this.setState({isLogged: value});
  }

  render() {
    return (
      <div>
        <Navbar isLogged={this.state.isLogged} funcIsLogged={this.changeIsLogged}/>
        <Main funcIsLogged={this.changeIsLogged}/>
      </div>
    )
  }
}
