import './App.css';
import React from "react";
import axios from 'axios'; 
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from "react-bootstrap";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./accordion.css";
import Search from './Search';
import CircleDiagram from './CircleDiagram';
import TaskCommits from "./TaskCommits";
import FailedTasks from "./FailedTasks";

class Table_render extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data_: [], parsed_data: [["1", "administrator", "Pasha", "say hi", "done", "14:00", "12:00"], ["2", "worker", "Katya", "say Bye", "failed", "12:00", "10:00"]]};
        this.sort_data = this.sort_data.bind(this);
      }
    

      postRequest() {
        const url = "/data";
        const formData = new FormData();
        return axios.post(url, formData);
      }
    
      async getFile() { 
        // this.postRequest().then((result) => {this.setState({data_: result.data});}).then(() => {this.parse_data(this.state.data_)});
        var result = await this.postRequest();
        if (result.data.new == "true") {
          this.parse_data(result.data);
        }
      }

      async componentDidMount() {
        await this.getFile();
        this.sort_data();
        try {
          setInterval(async () => {
            await this.getFile();
          }, 1000);
        } catch(e) {
          console.log(e);
        }
      }
      
      parse_data(object) {
        var jsonData = object;
        var task = [];
        var tasks = [];
        for (var i = 0; i < jsonData.tasks.length; i++) {
          task.push(jsonData.tasks[i].id);
          task.push(jsonData.tasks[i].position);
          task.push(jsonData.tasks[i].name);
          task.push(jsonData.tasks[i].task_name);
          task.push(jsonData.tasks[i].status);
          task.push(jsonData.tasks[i].status_changed);
          task.push(jsonData.tasks[i].time);
          tasks.push(task);
          task = [];
        }
        this.setState({parsed_data: tasks});
      }

      sort_data() {
        var myDict = {};
          this.state.parsed_data.map(function(task) {
              if (myDict[task[0]] == undefined) {
                  myDict[task[0]] = "status: " + task[4] + "   time: " + task[5] + "#";
              }
              else {
                  myDict[task[0]] += "status: " + task[4] + "   time: " + task[5] + "#";
              }
          })
        this.setState({dict: myDict});
      }

      render () {
        return (
          <div style={{display: 'flex'}}>
            <div style={{flex: 'auto', width: "50%", margin: "2%"}}>
              <Card style={{padding: "5%", textAlign: "center"}}>
                <h2>Tasks monitor</h2>
                <Search data={this.state.parsed_data}/>
              </Card>
            </div>
            <div style={{flex: "auto", width: "50%", margin: "2%"}}>
              <Card style={{padding: "5%", textAlign: "center"}}>
              <h2>Status monitor</h2>
                <CircleDiagram data={this.state.parsed_data}/>
                <TaskCommits data={this.state.parsed_data}/>
                <FailedTasks data={this.state.parsed_data}/>
              </Card>
            </div>
          </div>
        )
      }
} 

export default Table_render;