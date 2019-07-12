import * as serviceWorker from './serviceWorker';
import React, { Component } from "react";
import { render } from "react-dom";
import Form from "react-jsonschema-form";
import Second from './Second.js'
// import './App.css';

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

const formData = {
    "firstName": "Chuck",
    "lastName": "Norris",
    "age": 105,
    "bio": "Roundhouse kicking asses since 1940",
    "password": "noneed"
};

const onSubmit = ({formData}, e) => console.log("Data submitted: ",  formData.bio);
const log = (type) => console.log.bind(console, type);

render((
    <div className="container">
        <div className="row">
            <Form className="col"
              schema={schema}
              uiSchema={uiSchema}
              formData={formData}
              onChange={log("changed")}
              onSubmit={onSubmit}
              onError={log("errors")} />
            <Second className="col" data={formData} schema={schema} uiSchema={uiSchema}/>
        </div>
    </div>
), document.getElementById("root"));


// ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
