import React from 'react';
import RenderByName from "./RenderByName";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class RenderSortedDataByName extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        var nameSet = new Set();
        var self = this;
        return (
            <div>
            {this.props.data.map(function(task) {
                if (task[2].includes(self.props.search_text) == true && !nameSet.has(task[2])) {
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
                                    <RenderByName data={self.props.data} name={task[2]}/>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    );
                }
            })}
            </div>
        );
    }
}

export default RenderSortedDataByName;