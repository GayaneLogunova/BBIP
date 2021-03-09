import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import axios from 'axios'; 
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, CardColumns } from "react-bootstrap";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.done = [];
    this.done_data = [];
    this.pending_tasks = [];
    this.failed_tasks = [];
    this.state = {data: "", quant: 0, isLoad: false, task: [], done_data_state: [["done", "hi", "hello"]], index: -1}
    this.getFile = this.getFile.bind(this);
    //this.printValues = this.printValues.bind(this);
  }

  postRequest() {
    const url = "/data";
    const formData = new FormData();
    return axios.post(url, formData);
  }

  getFile() { //if even handler should be e in ()
    //e.preventDefault()
    this.postRequest().then(result => {this.setState({data: result, isLoad: true}, this.printValues(JSON.parse(JSON.stringify(this.state.data)).data))})
  }

  printValues(obj) {
    //console.log(JSON.parse(JSON.stringify(this.state.data)).data);
    for(var k in obj) {
      if(obj[k] instanceof Object) {
          this.printValues(obj[k]);
          var index_var = this.state.index + 1;
          this.setState({index: index_var});
          this.push = [];
      } 
      else {
        console.log(obj);
        this.done.push(obj[k]);
        var arr = this.state.done_data_state;
        arr[this.state.index] = this.done;
        this.setState({task: arr})
      };
    }
    this.classificator();
  };

  classificator() {
    var count = 0;
    console.log("tasks: " + this.state.index);
    for (var i = 0; i < this.state.index; i++) {
      if (this.state.task[i][0] == "done") {
        var arr = this.state.done_data_state;
        if (arr.length < count + 1) {
          console.log("arr.length < count");
          arr.push(0);
        }
        console.log(this.state.task);
        arr[count] = this.state.task[i];
        this.setState({done_data_state: arr});
        count += 1;
      }
    }
  }
  componentDidMount() {
    this.getFile();
    this.getFile();
  }


  render() {
    const isLoad = this.state.isLoad;
    let text;
    if (isLoad) {
      console.log("this: " + this.state.done_data_state);
      text = this.state.done_data_state[0][1];
    } else {
      text = "Go to the supermarket"
    }

    return (


      this.state.done_data_state.map((variant, idx) => (
        <Card
        bg="success"
        text="black"
        className="mb-2"
        style={{ width: '40rem' }}
        >
          <Card.Text style={{fontSize: "40px", textAlign: "center"}}>{variant[idx]}</Card.Text>
        </Card>
        )
      )

      // <div
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignContent: "center"
      // }}>
      //   <button onClick={this.getFile}>
      //     Get Data
      //   </button>






      //   <Card
      //     bg="success"
      //     text="black"
      //     className="mb-2"
      //     style={{ width: '40rem' }}
      //     >
      //       <Card.Text style={{fontSize: "40px", textAlign: "center"}}>{text}</Card.Text>
      //   </Card>
      // </div>

     
      // [
      //   'Primary',
      //   'Secondary',
      //   'Success',
      //   'Danger',
      //   'Warning',
      //   'Info',
      //   'Light',
      //   'Dark',
      // ].map((variant, idx) => (
      //   <Card
      //     bg={variant.toLowerCase()}
      //     key={idx}
      //     text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      //     style={{ width: '18rem' }}
      //     className="mb-2"
      //   >
      //     <Card.Header>Header</Card.Header>
      //     <Card.Body>
      //       <Card.Title>{variant} Card Title </Card.Title>
      //       <Card.Text>
      //         Some quick example text to build on the card title and make up the bulk
      //         of the card's content.
      //       </Card.Text>
      //     </Card.Body>
      //   </Card>
      // ))

     
    )
  }
}