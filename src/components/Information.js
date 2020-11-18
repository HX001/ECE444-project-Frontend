import React from 'react';
import {Form, Button,FormControl} from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Information= (props) => {;
    var ingredients = JSON.parse(localStorage.getItem("ingredients"));
    var title = sessionStorage.getItem("title");
    var image = sessionStorage.getItem("image");

    return (
        <div className = "Recipe">
            <div className="manuel-navbar">
                <Navbar className="bar" bg="light" variant="light">
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Nav.Link href="/popular">Popular</Nav.Link>
                    <Nav.Link href="/ingredients">Ingredients</Nav.Link>
                    <Nav.Link href="/recipes/:id">Recipes</Nav.Link>

                <Nav className="mr-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Nav>
                </Navbar>
                
                <div className="recipes">
                    <h1>{title}</h1>
                    <ol>
                        {ingredients.map(ingredient =>(
                            <li>{ingredient.text}</li>
                        ))}
                    </ol>
                    <div >
                        <img src={image} alt=""/>
                        
                    </div>
                </div>
            </div>
        </div>
        
    );
};


export default Information;