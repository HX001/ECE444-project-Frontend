import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import {Card, ListGroup, Button, Form, FormControl, Badge, CardGroup} from "react-bootstrap";
import { backgrounds } from "../Background";
import { ingredientTypes } from "../data/Ingredients-Type";
import {Link, Redirect, Route} from "react-router-dom";
import Recipe from "./Recipe";

class Ingredients extends Component {
    constructor() {
        super();
        const random = Math.floor(Math.random() * backgrounds.length);
        console.log("length is ", ingredientTypes.itinerary.length)
        console.log(ingredientTypes)
        //get a random index to select a background from the data folder
        const background = backgrounds[random];
        this.state = {
            background: background
        };
    }

    // return <Route exact path="/recipes" component={ingredient} />
    //passing a callback function from parents to update the search keywords in recipes part
    handleIngredientSelected = (ingredient) => {
        this.props.parentCallback(ingredient);
    }

    render() {
        const { background } = this.state;
        //set backgrounds image
        var backgroundStyle = {
            backgroundImage: `url(${background.path})`
        };

        const ingredientItinerary = ingredientTypes.itinerary;
        return (
            <div className="ingredients">
                <div className="background" style={backgroundStyle}/>

                <div className="manuel-navbar">
                    <Navbar className="bar" bg="light" variant="light">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/*<Nav.Link href="/popular">Popular</Nav.Link>*/}
                        <Navbar.Brand href="/ingredients">Ingredients</Navbar.Brand>
                        <Nav.Link href="/recipes" >Recipes</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                    </Navbar>
                </div>

                <Card className="ingredient-card" >
                        {ingredientItinerary.map((categories, index) => (
                            <div className="one-item">
                                <h1 className="ingredient-header">
                                    {categories.categoriesName}
                                </h1>

                                {categories.list.map((list, index) => (
                                    <div className="one-Category">
                                        <h4> {list.id} </h4>
                                        {list.ingredient.map((ingredient, index) => (
                                            <Link
                                                className="ingredient-Name"
                                                to={{
                                                    pathname: `/recipes/${ingredient}`,
                                                    state: true
                                                }}
                                            >
                                                <Badge Badge variant="z">{ingredient}</Badge>
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                </Card>
            </div>
        );
    }
}

export default Ingredients;