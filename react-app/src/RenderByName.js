import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './accordion.css';

function NameAccordion(props) {
    return (
        <div className="accordion-body">
            {props.data.map((sent) => {
                if (sent[1] == props.name) {
                    if (sent[3] == "done") {
                        return ( 
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                        <Typography className="done-text">
                                            {sent[2]}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {sent[3] + " " + sent[4]}
                                        </Typography>
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
                                            {sent[2]}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {sent[3] + " " + sent[4]}
                                        </Typography>
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
                                            {sent[2]}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {sent[3] + " " + sent[4]}
                                        </Typography>
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

export default NameAccordion;