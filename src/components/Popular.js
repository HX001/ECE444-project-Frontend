import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Button, Form, FormControl} from "react-bootstrap";

class Popular extends Component {
    render() {
        return (
            <div className="popular">
                <div className="manuel-navbar">
                    <Navbar bg="light" variant="light">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Navbar.Brand href="/popular"> Popular</Navbar.Brand>
                        <Nav.Link href="/ingredients">Ingredients</Nav.Link>
                        <Nav.Link href="/recipes/:id">Recipes</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>

                        <Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default Popular;