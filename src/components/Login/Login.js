import React from 'react'
import {
    FormGroup,
    ListGroup,
    Tab,
    Button,
    Col
} from "react-bootstrap"

const login = (props) => {

    function FieldGroup({ id, label, help, ...props }) {
        return (
            <FormGroup controlId={id}>
                <div>{label}</div>
                <ListGroup {...props} onChange={props.change} />
                {help && <Tab>{help}</Tab>}
            </FormGroup>
        )
    }
    return <div className="container" style={{ textAlign: "left" }}>
        <Col md={2} />
        <Col md={8}>
            <form>
                <FieldGroup id="listGroupsEmail" type="text" label="Email" inputRef={(ref) => { this.email = ref }} />
                <FieldGroup id="listGroupsPassword" type="password" label="Password" inputRef={(ref) => { this.password = ref }} />
                <Button type="button" bsStyle="success" onClick={() => {
                    props.login(this.email.value, this.password.value)
                }}>
                    Login
                </Button>
            </form>
            <br />
            <br />
        </Col>
        <Col md={2} />
    </div>
}

export default login