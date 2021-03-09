import React from "react";
import PropTypes from "prop-types";

import React, {Component} from "react";
import axios from 'axios'; 
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, CardColumns } from "react-bootstrap";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoad: false, data: "", quant: 0, tasks: [], done_data: [["done", "hi", "hello"], ], index: -1}
    this.getFile = this.getFile.bind(this);
  }

  postRequest() {
    const url = "/data";
    const formData = new FormData();
    return axios.post(url, formData);
  }

  getFile() { 
    this.postRequest().then(result => {
      this.setState({data: result, isLoad: true}, 
        this.printValues(JSON.parse(JSON.stringify(this.state.data)).data))})
  }

  printValues(obj) {
    var index_var = -1;
    for(var k in obj) {
      if(obj[k] instanceof Object) {
          index_var += 1;
          this.printValues(obj[k]);
      } 
      else {
        var arr = this.state.tasks;
        if (arr.length < (index_var + 1)) {
          arr.push([]);
        }
        arr[index_var].push(obj[k]);
        this.setState({tasks: arr})
      };
    }
    this.setState({index: index_var});
    this.classificator();
  };

  classificator() {
    var count = 0;
    for (var i = 0; i < this.state.index; i++) {
      if (this.state.task[i][0] == "done") {
        var arr = this.state.done_data;
        if (arr.length < (count + 1)) {
          arr.push([]);
        }
        arr[count] = this.state.tasks[i];
        this.setState({done_data: arr});
        count += 1;
      }
    }
  }

  componentDidMount() {
    this.getFile();
  }

  render() {
    var text;
    if (this.state.isLoad) {
      console.log("this: " + this.state.done_data);
      text = this.state.done_data[0][1];
    } else {
      text = "Go to the supermarket";
    }

    return (

      this.state.done_data.map((variant, idx) => (
        <Card
        bg="success"
        text="black"
        className="mb-2"
        style={{ width: '40rem' }}
        >
          <Card.Text style={{fontSize: "40px", textAlign: "center"}}>{variant}</Card.Text>
        </Card>
        )
      )

    );
  }
}


export default User;
