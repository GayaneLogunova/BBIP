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
        this.state = {data_: [], parsed_data: []}
        this.getFile = this.getFile.bind(this);
      }
    

      postRequest() {
        const url = "/data";
        const formData = new FormData();
        return axios.post(url, formData);
      }
    
      getFile() { 
        this.postRequest().then(result => {
          this.check_thought(result.data)})
      }

      componentDidMount() {
        this.getFile();
      }

      check_thought(object) {
        var jsonData = object;
        var task = [];
        for (var i = 0; i < jsonData.tasks.length; i++) {
            task.push(jsonData.tasks[i].position);
            task.push(jsonData.tasks[i].name);
            task.push(jsonData.tasks[i].task_name);
            task.push(jsonData.tasks[i].status);
        }
      }

      render () {
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
                  
                  <Accordion style={{width: '100%'
                            }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      >
                      <Typography style={{
                            flexBasis: '33.33%',
                            flexShrink: 0,
                            
                      }}>Administrator</Typography>
                  </AccordionSummary>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </Accordion>


                  {/* <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography> */}
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