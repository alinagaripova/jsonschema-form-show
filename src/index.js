import * as serviceWorker from './serviceWorker';
import React, { Component } from "react";
import { render } from "react-dom";
import Form from "react-jsonschema-form";

const schema = {
    "title": "A registration form",
    "description": "A simple form example.",
    "type": "object",
    "required": [
        "firstName",
        "lastName"
    ],
    "properties": {
        "firstName": {
            "type": "string",
            "title": "First name",
            "default": "Chuck"
        },
        "lastName": {
            "type": "string",
            "title": "Last name"
        },
        "age": {
            "type": "integer",
            "title": "Age of person"
        },
        "bio": {
            "type": "string",
            "title": "Bio"
        },
        "password": {
            "type": "string",
            "title": "Password",
            "minLength": 3
        },
        "telephone": {
            "type": "string",
            "title": "Telephone",
            "minLength": 10
        }
    }
};
const uiSchema = {
    "firstName": {
        "ui:autofocus": true,
        "ui:emptyValue": ""
    },
    "age": {
        "ui:widget": "updown",
        "ui:title": "Age of person",
        "ui:description": "(earthian year)"
    },
    "bio": {
        "ui:widget": "textarea",
        "ui:options": {
            rows:4
        }
    },
    "password": {
        "ui:widget": "password",
        "ui:help": "Hint: Make it strong!"
    },
    "date": {
        "ui:widget": "alt-datetime"
    },
    "telephone": {
        "ui:options": {
            "inputType": "tel"
        }
    }
};

let uiSchema2 = {
    "firstName": {
        "ui:widget": (props) => {
            return (
                <p className="alert alert-secondary">{props.value}</p>
            );
        },
    },
    "lastName": {
        "ui:widget": (props) => {
            console.log(props);
            return (
                <p className="alert alert-secondary">{props.value}</p>
            );
        }
    },
    "age": {
        "ui:widget": (props) => {
            return (
                <p className="alert alert-secondary">{props.value}</p>
            );
        }
    },
    "bio": {
        "ui:widget": (props) => {
            return (
                <p className="alert alert-secondary">{props.value}</p>
            );
        }
    },
    "password": {
        "ui:widget": (props) => {
            return (
                <p>{props.value}</p>
            );
        }
    },
    "date": {
        "ui:widget": (props) => {
            return (
                <p className="alert alert-secondary">{props.value}</p>
            );
        }
    },
    "telephone": {
        "ui:widget": (props) => {
            return (
                <p className="alert alert-secondary">{props.value}</p>
            );
        }
    }
};

const data = {
    "firstName": "Chuck",
    "lastName": "Norris",
    "age": 105,
    "bio": "Roundhouse kicking asses since 1940",
    "password": "noneed"
};

const log = (type) => console.log.bind(console, type);

class First extends Component {
    constructor(props) {
        super(props);
        this.state = {formData:data};
    }
    onChange = ({formData}) => {
        this.setState({formData});
        console.log("Data submitted: ",  formData);
    };
    render() {
        const{formData} = this.state;
        return(
            <div className="container">
                <div className="row">
                    <Form className="col"
                          schema={schema}
                          uiSchema={uiSchema}
                          formData={formData}
                          onChange={this.onChange}
                          onError={log("errors")} />
                    <Form className="col"
                          schema={schema} uiSchema={uiSchema2} formData={formData}/>
                </div>
            </div>)
    }
}

render(<First/>, document.getElementById("root"));

serviceWorker.unregister();
