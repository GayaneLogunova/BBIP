import './App.css';
import React from "react";
import axios from 'axios'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
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
      }
    

      postRequest() {
        const url = "/data";
        const formData = new FormData();
        return axios.post(url, formData);
      }
    
      getFile() { 
        this.postRequest().then((result) => {this.setState({data_: result.data});}).then(() => {this.parse_data(this.state.data_)});
      }

      componentDidMount() {
        try {
          setInterval(async () => {
            this.getFile();
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
          task.push(jsonData.tasks[i].position);
          task.push(jsonData.tasks[i].name);
          task.push(jsonData.tasks[i].task_name);
          task.push(jsonData.tasks[i].status);
          task.push(jsonData.tasks[i].time);
          tasks.push(task);
          task = [];
        }
        this.setState({parsed_data: tasks});
      }

      render () {
        var mySet = new Set();
        return (
          <div className="accordion-base">

          {this.state.parsed_data.map((sent) => {
              if (!mySet.has(sent[0])) {
                  mySet.add(sent[0]);
                  return ( 
                      <div>
                          <Accordion>
                              <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header">
                                  <Typography>
                                      {sent[0]}
                                  </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <RenderbyTitle data={this.state.parsed_data} position={sent[0]}/>
                              </AccordionDetails>
                          </Accordion>
                      </div>
                  );
              }
          })}
          </div>
        )
      }
} 

export default Table_render;