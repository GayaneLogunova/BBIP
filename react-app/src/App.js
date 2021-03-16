import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import axios from 'axios'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Grid } from '@material-ui/core';

import Card from "react-bootstrap";
import GridLayout from 'react-grid-layout';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isLoad: false, data: "", quant: 0, tasks: [["failed", "tasks", "18:00", "professor"]], done_tasks: [["done", "hi", "hello"],], pending_tasks: [["pending", "hi", "hello"]], failed_tasks: [["failed", "hi", "hello"]], index: -1}
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
    var index_var = this.state.index;
    for(var k in obj) {
      if(obj[k] instanceof Object) {
          index_var += 1;
          this.setState({index: index_var})
          this.printValues(obj[k]);
      } 
      else {
        var arr = this.state.tasks;
        if (arr.length < (this.state.index + 1)) {
          arr.push([]);
        }
        arr[index_var] = [];
        arr[index_var].push(obj.state);
        arr[index_var].push(obj.text);
        arr[index_var].push(obj.who);
        arr[index_var].push(obj.time_limit);
        this.setState({tasks: arr})
      };
    }
    this.classificator();
  };

  classificator() {
    var d_count = 0;
    var p_count = 0;
    var f_count = 0;
    for (var i = 0; i < this.state.index; i++) {
      if (this.state.tasks[i][0] == "done") {
        var arr = this.state.done_tasks;
        if (arr.length < (d_count + 1)) {
          arr.push([]);
        }
        arr[d_count] = this.state.tasks[i];
        this.setState({done_tasks: arr});
        d_count += 1;
      }
      else if (this.state.tasks[i][0] == "pending") {
        var arr = this.state.pending_tasks;
        if (arr.length < (p_count + 1)) {
          arr.push([]);
        }
        arr[p_count] = this.state.tasks[i];
        this.setState({pending_tasks: arr});
        p_count += 1;
      }
      else if (this.state.tasks[i][0] == "failed") {
        var arr = this.state.failed_tasks;
        if (arr.length < (f_count + 1)) {
          arr.push([]);
        }
        arr[f_count] = this.state.tasks[i];
        this.setState({failed_tasks: arr});
        f_count += 1;
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
      text = this.state.done_tasks[0][1];
    } else {
      text = "Go to the supermarket"
    }
    console.log("done_tasks: " + this.state.done_tasks);

    

    // const layout = [
    //   {i: 'one', x: 5, y: 5, w: 10, h: 10, static: true},
    //   {i: 'two', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    //   {i: 'three', x: 4, y: 0, w: 1, h: 2}
    // ];
    // layout.push({i: 'test', x: 100, y: 200, w: 10, h: 10})
    // let cards = [];
    // for (var i = 0; i < this.state.done_tasks; i++) {
    //   cards.push(
    //     <Card
    //     bg="success"
    //     text="black"
    //     className="mb-2"
    //     style={{ width: '40rem' }}
    //     >
    //       <Card.Text style={{fontSize: "40px", textAlign: "center"}}>{this.state.done_tasks[i][1]}</Card.Text>
    //     </Card>
    //   );
    // }
    // for (var i = 0; i < this.state.pending_tasks; i++) {
    //   cards.push(
    //     <Card
    //     bg="success"
    //     text="black"
    //     className="mb-2"
    //     style={{ width: '40rem' }}
    //     >
    //       <Card.Text style={{fontSize: "40px", textAlign: "center"}}>{this.state.pending_tasks[i][1]}</Card.Text>
    //     </Card>
    //   );
    // }
    return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
    >
      {this.state.done_tasks[0]}
    </Grid>
      // <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
      //   <div key="one">a</div>
      //   <div key="two">b</div>
      //   <div key="three">c</div>
      //   <div key="test">test</div>
      // </GridLayout>
      // this.state.done_tasks.map((variant, idx) => (
      //   <Card
      //   bg="success"
      //   text="black"
      //   className="mb-2"
      //   style={{ width: '40rem' }}
      //   >
      //     <Card.Text style={{fontSize: "40px", textAlign: "center"}}>{variant[1]}</Card.Text>
      //   </Card>
      //   )
      // )

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