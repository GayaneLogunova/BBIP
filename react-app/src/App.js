import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import axios from 'axios'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Main from "./Main";

export default class App extends React.Component {
  render() {
    return (
      <Main/>
    )
  }
}
