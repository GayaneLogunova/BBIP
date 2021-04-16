import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './accordion.css';


export default class NameAccordion extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        var my = this;
        var output = my.props.data.map(function(sent) {
          if (sent[1] == my.props.name) {
            return(
              <div>
                <Accordion className="accordion-body"
                // className="body"
                //   style={{width: '500px',
                //   marginLeft: '2%',
                //   marginRight: '2%'}} 
                >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <Typography 
                className="accordion-text"
                // style={{
                //       flexBasis: '33.33%',
                //       flexShrink: 0}}
                >{sent[2]}</Typography>
                </AccordionSummary>
                <AccordionDetails style={{width: '100%' }}>

                  <Typography>
                    {sent[3] + " " + sent[4]}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            )
          }
        })

        return (
            <div>
              {output}
            </div>
        )
    }
}