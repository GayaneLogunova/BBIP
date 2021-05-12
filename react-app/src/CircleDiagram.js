import React from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts';

class CircleDiagram extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        let done = 0;
        let pending = 0;
        let failed = 0;
        let all = 0;
        this.props.data.map(function(task) {
            if (task[4] == "done") {
                done++;
            }
            else if (task[4] == "pending") {
                pending++;
            }
            else {
                failed++;
            }
        })
        all = done + pending + failed;

        var options = {
			animationEnabled: true,
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: Math.round(done / all * 100) / 100, label: "Done", color: "#16AC23" },
					{ y: Math.round(pending / all * 100) / 100, label: "Pending", color: "#E7CF24" },
					{ y: Math.round(failed  / all * 100) / 100, label: "Failed", color: "#DC3A19" },
				]
			}]
		}
        return ( 
            <div style={{margin: "2%", padding: "2%"}} >
			    <CanvasJSChart options = {options}/>
            </div>
        );
    }
}

export default CircleDiagram;