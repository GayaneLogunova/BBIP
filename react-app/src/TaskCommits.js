import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import {Card, Form, Button} from "react-bootstrap";
import 'react-perfect-scrollbar/dist/css/styles.css';
import './accordion.css';


class TaskCommits extends React.Component {
    constructor(props) {
        super(props);
        this.compare = this.compare.bind(this);
    }

    compare(first, second) {
        let myFirst = first[5];
        let mySecond = second[5];
        if (first[5].length < 5) {
            myFirst = "0" + first; 
        }
        if (second[5].length < 5) {
            mySecond = "0" + second;
        }
        if (myFirst > mySecond) {
            console.log("first > second: " + first[5] + " " + second[5]);
            return -1;
        }
        else {
            console.log("second > first: " + first[5] + " " + second[5]);
            return 1;
        }
    }


    render () {
        var items = [];
        this.props.data.map(function(task) {
            if (task[4] != "pending") {
                items.push(task);
            }
        }) 
        items.sort(this.compare);


        return (
            
            <Card style={{margin: "2%", padding: "2%", textAlign: "inherit"}} >
            <Card.Title> Status changed </Card.Title>
            <div style={{overflowY: "scroll", height: "300px"}}>
            {items.map(function(task) {
                if (task[4] == "done") {
                    return (
                        <Card>                    
                            <ListItem className="done-text">
                                <ListItemText  primary={"task id: " + task[0] + "  " + task[3] + "  " + task[4]} secondary={task[2]}/>
                                <p>{task[5]}</p>
                            </ListItem>
                        </Card>
                        );
                }
                else {
                    return (
                    <Card>                    
                        <ListItem className="failed-text">
                            <ListItemText  primary={"task id: " + task[0] + "  " + task[3] + "  " + task[4]} secondary={task[2]}/>
                            <p>{task[5]}</p>
                        </ListItem>
                    </Card>
                    );
                }
            })}
            </div>
        </Card>

        )
    }
}


export default TaskCommits;
