import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default class SimpleAccordion extends React.Component {

    constructor(props) {
        super(props)
        this.state = {selected_arr: []}
        this.select_elems();
    }

    select_elems() {
        var selected = [];
        console.log("props.data: " + this.props.data)
        //console.log("arr: " + arr);
        for (var i = 0; i < this.props.data.length; i++) {
            if (this.props.data[i][0] == this.props.position) {
                selected.push(this.props.data[i]);
                console.log("selected: " + selected);
            }
        }
        //console.log("selected: " + selected);
        this.setState({selected_arr: selected})
        //return selected;
    }

    componentDidMount() {
        this.select_elems();
    }

    render () {
        console.log("sent data: " + this.props.data);
        //console.log("SELECTED_ARR: " + this.state.selected_arr);
        var my = this;
        var output = my.props.data.map(function(sent) {
          if (sent[0] == my.props.position) {
            return(
              <div>
                <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{
                        flexBasis: '33.33%',
                        flexShrink: 0
                  }}>{sent[1]}</Typography>
                </AccordionSummary>
                <AccordionDetails style={{width: '100%' }}>
                  <Typography>
                    {sent[2]}
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