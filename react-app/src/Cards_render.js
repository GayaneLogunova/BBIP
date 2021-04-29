import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import axios from 'axios'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RenderbyTitle from "./RenderByTitle";
import "./accordion.css";


class Table_render extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data_: [], parsed_data: [["administrator", "Pasha", "say hi", "done"], ["worker", "Katya", "say Bye", "pending"]], username: ""}
        this.getFile();
      }
    

      postRequest() {
        const url = "/data";
        const formData = new FormData();
        return axios.post(url, formData);
      }
    
      getFile() { 
        this.postRequest().then((result) => {this.setState({data_: result.data});}).then(() => {this.check_thought(this.state.data_)});
      }

      componentDidMount() {
        this.getFile();
      }

      check_thought(object) {
        var jsonData = object;
        var task = [];
        var tasks = [];
        for (var i = 0; i < jsonData.tasks.length; i++) {
          task.push(jsonData.tasks[i].position);
          task.push(jsonData.tasks[i].name);
          task.push(jsonData.tasks[i].task_name);
          task.push(jsonData.tasks[i].status);
          task.push(jsonData.tasks[i].time);
          tasks.push(task);
          task = [];
        }
        this.setState({parsed_data: tasks});
        console.log("state in check_thought: " + this.state.parsed_data);
      }

      render () {
        return (
          <div className="accordion-base">
            <Accordion> 
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography style={{
                      flexBasis: '33.33%',
                      flexShrink: 0
                }}>Administrator</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <RenderbyTitle data={this.state.parsed_data} position={"administrator"}/>
              </AccordionDetails>
            </Accordion>
          </div>
        )

      }
} 

export default Table_render;