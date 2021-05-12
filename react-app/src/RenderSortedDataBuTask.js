import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class RenderSortedDataByTask extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var mySet = new Set();
        var self = this;
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
        return(
            <div>
            {this.props.data.map(function(task) {
                if (task[3].includes(self.props.search_text) == true && !mySet.has(task[0])) {
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
                                    );
                                })}
                            </AccordionDetails>
                        </Accordion>
                    );
                }
            })}
            </div>
        );
    }
}

export default RenderSortedDataByTask;