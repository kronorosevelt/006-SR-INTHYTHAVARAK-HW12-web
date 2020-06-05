import React from 'react'
import {Form,Col,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
function Authen() {
    return (
        <div className="container">
           <Form>
           <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
           
            <Form.Control type="Username" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
          
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            </Form.Row>
            <Link as={Link} to ="/Welcome">
                <Button variant="dark" type="submit">
                Submit
                </Button>
                </Link>
            </Form>
        </div>
    )
}

export default Authen
