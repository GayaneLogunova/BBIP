import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Render_by_name from "./Render_by_name";
import './accordion.css'


export default class SimpleAccordion extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        var my = this;
        var mySet = new Set();
        var output = my.props.data.map(function(sent) {
          if (sent[0] == my.props.position && !mySet.has(sent[1])) {
            mySet.add(sent[1]);
            return(
              <div className="accordion-body">
                <Accordion
                  className="accordion-body"
                  // style={{width: '500px',
                  // marginLeft: '2%',
                  // marginRight: '2%'}}
                  >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <Typography 
                // style={{
                //       flexBasis: '33.33%',
                //       flexShrink: 0
                // }}
                >{sent[1]}
                </Typography>
                </AccordionSummary>
                <AccordionDetails 
                // style={{width: '100%' }}
                >
                <Render_by_name data={my.props.data} name={sent[1]}/>

                  {/* <Typography>
                    {sent[2]}
                  </Typography> */}
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
            // this.state.selected_arr.map((variant, idx) => (
            //     <Accordion>
            //     <AccordionSummary
            //       expandIcon={<ExpandMoreIcon />}
            //       aria-controls="panel1a-content"
            //       id="panel1a-header"
            //     >
            //       <Typography style={{
            //             flexBasis: '33.33%',
            //             flexShrink: 0
            //       }}>{variant[1]}</Typography>
            //     </AccordionSummary>
            //     <AccordionDetails style={{width: '100%' }}>
            //       <Typography>
            //         {variant[2]}
            //       </Typography>
            //     </AccordionDetails>
            //   </Accordion>
            // ))
        )
    }
}