import React from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'


function Menu() {
    return (
        <div>
            <Navbar bg="light" variant="light">
            <div className="container">
            <Navbar.Brand href="/">React Router</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="video">Video</Nav.Link>
            <Nav.Link href="Account">Account</Nav.Link>
            <Nav.Link href="Authen">Auth</Nav.Link>
            </Nav>
          <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
        </div>
  </Navbar>

        
        </div>
    )
}

export default Menu
