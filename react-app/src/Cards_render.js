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
import Accordion_render from "./Acoordion_render"

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     flexBasis: '33.33%',
//     flexShrink: 0,
//   },
//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(15),
//     color: theme.palette.text.secondary,
//   },
// }));


class Table_render extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data_: [], parsed_data: [["administrator", "Pasha", "say hi", "done"], ["worker", "Katya", "say Bye", "pending"]]}
        this.getFile = this.getFile.bind(this);
        this.getFile();
      }
    

      postRequest() {
        const url = "/data";
        const formData = new FormData();
        return axios.post(url, formData);
      }
    
      getFile() { 
        // this.postRequest().then(result => 
        //   this.check_thought(result.data))

        this.postRequest().then((result) => {this.setState({data_: result.data});}).then(() => {this.check_thought(this.state.data_)});
          // axios.post("/get-content", {})
          // .then((response) => { this.setState({text: response.data.content});})
          // .then(() => {this.setState({isLoadingContent: true})});
      }

      componentDidMount() {
        this.getFile();
        //console.log("data from getFile: " + this.state.data_);
        // var tasks = [];
        // tasks = this.getFile();
        // console.log("tasks in componentDidMount: " + tasks);
        
        //this.setState({parsed_data: tasks});
        //console.log("data in componentDidMOunt: " + this.state.parsed_data);
        //this.render();
      }

      // componentDidUpdate(prevProps) {
      //   if (this.props.parsed_data !== prevProps.parsed_data) {
      //     this.fetchData(this.props.userID);
      //   }
      // }

      check_thought(object) {
        var jsonData = object;
        var task = [];
        var tasks = [];
        for (var i = 0; i < jsonData.tasks.length; i++) {
          task.push(jsonData.tasks[i].position);
          task.push(jsonData.tasks[i].name);
          task.push(jsonData.tasks[i].task_name);
          task.push(jsonData.tasks[i].status);
          tasks.push(task);
          task = [];
        }
        //console.log("tasks in check_thought: " + tasks);
        this.setState({parsed_data: tasks});
        console.log("state in check_thought: " + this.state.parsed_data);
      }

      render () {
        //console.log("data before render: " + this.state.parsed_data)
          return (
            <div style={{
              width: '100%'
            }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{
                        flexBasis: '33.33%',
                        flexShrink: 0
                  }}>Administrator</Typography>
                </AccordionSummary>
                <AccordionDetails style={{width: '100%'
                  }}>
                  <Accordion_render data={this.state.parsed_data} position={"administrator"}/>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            // <button onClick={this.getFile}>
            // Get Data
            // </button>
          )
      }
} 

export default Table_render;