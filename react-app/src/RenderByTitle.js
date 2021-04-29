import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RenderByName from './RenderByName';
import './accordion.css';

function NameAccordion(props) {
    var mySet = new Set();
    return (
        <div className="accordion-body">
            {props.data.map((sent) => {
                if (sent[0] == props.position && !mySet.has(sent[1])) {
                    mySet.add(sent[1]);
                    return ( 
                        <div>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                    <Typography>
                                        {sent[1]}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <RenderByName data={props.data} name={sent[1]}/>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default NameAccordion;