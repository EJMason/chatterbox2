import React from 'react';

import { Form, FormGroup, FormControl } from 'react-bootstrap';

const MessageBox = () => {
    return (
        <div>
            <Form className="myForm">
                <FormGroup>
                    <FormControl 
                    type="text"
                    placeholder="Enter chat..."/>
                </FormGroup>
            </Form>
        </div>
    );
};

export default MessageBox;

//