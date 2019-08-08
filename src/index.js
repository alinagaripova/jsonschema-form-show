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

function MyWidget(props) {
    console.log(props)
    const {options, value} = props;
    const {color, backgroundColor} = options;
    return (<p style={{color, backgroundColor}} className="alert alert-secondary">{value}</p>);
}
MyWidget.defaultProps = {
    options: {
        color: "#17a2b8",
        backgroundColor:"lightGrey"
    }
};
const uiSchema2 = {
    "firstName": {
        "ui:widget": MyWidget
    },
    "lastName": {
        "ui:widget": MyWidget
    },
    "age": {
        "ui:widget": MyWidget
    },
    "bio": {
        "ui:widget": MyWidget
    },
    "password": {
        "ui:widget": MyWidget
    },
    "date": {
        "ui:widget": MyWidget
    },
    "telephone": {
        "ui:widget": MyWidget
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
        const {formData} = this.state;
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
