import React from 'react';
import {Form} from "react-bootstrap";
import RenderAllTasks from "./RenderAllTasks";
import RenderSortedDataByName from "./RenderSortedDataByName";
import RenderSortedDataByTask from "./RenderSortedDataBuTask";
import './accordion.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checkBoxName: true, checkBoxTask: false, search_text: ""};
        this.handleChangeSearch = this.handleChangeSearch.bind(this); 
        this.onChangeByName = this.onChangeByName.bind(this);
        this.onChangeByTask = this.onChangeByTask.bind(this);
      }

    onChangeByName(event) {
        event.preventDefault();
        this.setState({ checkBoxName: event.target.value});

    };

    onChangeByTask(event) {
        event.preventDefault();
        this.setState({checkBoxTask: event.target.value});
    }

    handleChangeSearch(event) {    
        if (!this.state.checkBoxName && !this.state.checkBoxTask) {
            alert("At least one of checkboxes should be checked");
        }
        else {
            this.setState({ search_text: event.target.value}); 
        }
    }

    render() {
        var List1 = [<RenderAllTasks data={this.props.data}/>];
        if (this.state.search_text == "") {
            List1 = [<RenderAllTasks data={this.props.data}/>];
        }
        else {
            if (this.state.checkBoxName && !this.state.checkBoxTask) {
                List1 = [<RenderSortedDataByName data={this.props.data} search_text={this.state.search_text}/>];
            }
            else if (this.state.checkBoxTask && !this.state.checkBoxName) {
                List1 = [<RenderSortedDataByTask data={this.props.data} search_text={this.state.search_text}/>];
            }
            else if (this.state.checkBoxName && this.state.checkBoxTask) {
                List1 = [<RenderSortedDataByName data={this.props.data} search_text={this.state.search_text}/> , <RenderSortedDataByTask data={this.props.data} search_text={this.state.search_text}/>];
            }

        }
        return (
            <div style={{position: 'relative'}}>
                <div style={{padding: "3%"}} >
                    <Form.Row style={{marginBottom: "2%"}}>
                        <Form.Control value={this.state.request} onChange={this.handleChangeSearch} type="search_text" placeholder="Enter..." />
                    </Form.Row>
                    <Form.Group>
                        <Form.Row>
                            <Form.Check type="checkbox" defaultChecked={true} onChange={this.onChangeByName}  label="Search by name"/>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Row>
                            <Form.Check type="checkbox" onChange={this.onChangeByTask} label="Search by task"/>
                        </Form.Row>
                    </Form.Group>
                    <h4>Tasks</h4>
                    {List1.map(function(component) {
                        return component;
                    })}
                </div>
            </div>
        );
    }

}

export default Search;