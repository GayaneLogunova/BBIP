import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './accordion.css';

class NameAccordion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var idSet = new Set();
        var myDict = {};
        this.props.data.map(function(task) {
            if (myDict[task[0] + task[2]] == undefined) {
                myDict[task[0] + task[2]] = "status: " + task[4] + "   time: " + task[5] + "#";
            }
            else {
                myDict[task[0] + task[2]] += "status: " + task[4] + "   time: " + task[5] + "#";
            }
        })
        return (
            <div className="accordion-body">
                {this.props.data.map((sent) => {
                    if (sent[2] == this.props.name && !idSet.has(sent[0])) {
                        idSet.add(sent[0]);
                        if (sent[4] == "done") {
                            return ( 
                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header">
                                            <Typography className="done-text">
                                                {sent[3]}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails style={{display: "block"}}>
                                            {myDict[sent[0] + sent[2]].split('#').map(function(str) { 
                                                return (
                                                    <Typography>
                                                        {str}
                                                    </Typography>
                                                )
                                            })}
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            );
                        }
                        else if (sent[3] == "pending") {
                            return ( 
                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                            <Typography className="pending-text">
                                                {sent[3]}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails style={{display: "block"}}>
                                            {myDict[sent[0] + sent[2]].split('#').map(function(str) { 
                                                return (
                                                    <Typography>
                                                        {str}
                                                    </Typography>
                                                )
                                            })}
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            );
                        }
                        else {
                            return ( 
                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header">
                                            <Typography className="failed-text">
                                                {sent[3]}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails style={{display: "block"}}>
                                            {myDict[sent[0] + sent[2]].split('#').map(function(str) { 
                                                return (
                                                    <Typography>
                                                        {str}
                                                    </Typography>
                                                )
                                            })}
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            );
                        }
                    }
                })}
            </div>
        );
    }
    
}

export default NameAccordion;