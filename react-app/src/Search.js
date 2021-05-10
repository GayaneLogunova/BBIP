import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Card, Form, Button} from "react-bootstrap";
import RenderByName from "./RenderByName";
import RenderAllTasks from "./RenderAllTasks";
import './accordion.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checkBoxName: false, checkBoxTask: false, search_text: ""};
        this.handleChangeSearch = this.handleChangeSearch.bind(this); 
        this.onChangeByName = this.onChangeByName.bind(this);
        this.onChangeByTask = this.onChangeByTask.bind(this);
      }


    onChangeByName(event) {
        this.setState({ checkBoxName: event.target.checked});
    };

    onChangeByTask(event) {
        this.setState({checkBoxTask: event.target.checked})
    }

    handleChangeSearch(event) {    
        if (!this.state.checkBoxName && !this.state.checkBoxTask) {
            alert("At least one of checkboxes should be checked");
        }
        else {
            this.setState({ search_text: event.target.value}); 
        }
    }

    render() {

        var myDict = {};
        this.props.data.map(function(task) {
            var z = "status: " + task[4] + "   time: " + task[5] + "#";
            if (myDict[task[0]] == undefined) {
                myDict[task[0]] = z;
            }
            else {
                myDict[task[0]] += "status: " + task[4] + "   time: " + task[5] + "#";
            }
        })

        var List1 = [];
        var selt = this;
        var mySet = new Set();
        var nameSet = new Set();
        if (selt.state.search_text == "") {
            return (
                <div style={{position: 'relative'}}>
                    <div style={{padding: "3%"}} >
                        <Form.Row style={{marginBottom: "2%"}}>
                            <Form.Control value={this.state.request} onChange={this.handleChangeSearch} type="search_text" placeholder="Enter..." />
                        </Form.Row>
                        <Form.Group>
                            <Form.Row>
                                <Form.Check type="checkbox" onChange={this.onChangeByName} label="Search by name"/>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Row>
                                <Form.Check type="checkbox" onChange={this.onChangeByTask} label="Search by task"/>
                            </Form.Row>
                        </Form.Group>
                        <h4>Tasks</h4>
                        <RenderAllTasks data={selt.props.data}/>
                    </div>
                </div>
            );
            
        }
        else { 
            if (this.state.checkBoxName) {
            List1 = this.props.data.map(function(task) {
                    if (task[2].includes(selt.state.search_text) == true && !nameSet.has(task[2])) {
                        nameSet.add(task[2]);
                        return (
                            <Accordion style={{marginBottom: "2%"}}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography>
                                        {task[2]}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <RenderByName data={selt.props.data} name={task[2]}/>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        );
                    }
                });
            }
            else {
                List1 = this.props.data.map(function(task) {
                    if (task[3].includes(selt.state.search_text) == true && !mySet.has(task[0])) {
                        mySet.add(task[0])
                        return (
                            <Accordion style={{marginBottom: "2%"}}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography>
                                        {task[3]}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{display: "block"}}>
                                    {myDict[task[0]].split('#').map(function(str) { 
                                        return (
                                            <Typography>
                                                {str}
                                            </Typography>
                                        )
                                    })}
                                </AccordionDetails>
                            </Accordion>
                        );
                    }
                });
            }
        
            return(
                <div style={{position: 'relative'}}>
                    <div style={{padding: "3%"}}>
                        <Form.Row style={{marginBottom: "2%"}}>
                            <Form.Control value={this.state.request} onChange={this.handleChangeSearch} type="search_text" placeholder="Enter..." />
                        </Form.Row>
                        <Form.Group>
                            <Form.Row>
                                <Form.Check type="checkbox" onChange={this.onChangeByName} label="Search by name"/>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Row>
                                <Form.Check type="checkbox" onChange={this.onChangeByTask} label="Search by task"/>
                            </Form.Row>
                        </Form.Group>
                        <h4>Tasks</h4>
                        <div style={{margin: "2%"}}>
                            {List1}
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default Search;