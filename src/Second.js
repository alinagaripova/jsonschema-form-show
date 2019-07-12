import React, { Component } from "react";
import Form from "react-jsonschema-form";
import './App.css';

class Second extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props.data);
        const {data, schema, uiSchema} = this.props;
        return(
            <Form className="col"
                   schema={schema} uiSchema={uiSchema} formData={data}/>
        );
    }
}

export default Second