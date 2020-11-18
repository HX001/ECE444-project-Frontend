import React, {Component} from 'react';
import {ListGroup, Card, Form, Button, FormControl, Image} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import axios from "axios";
import { backgrounds } from "../Background";
import {Link} from "react-router-dom";

class Home extends Component {
    constructor() {
        super();
        const random = Math.floor(Math.random() * backgrounds.length);
        // console.log("length is ", backgrounds.length)
        // console.log(backgrounds)
        const background = backgrounds[random];
        this.state = {
            background: background
        };
    }
    
    onSearch = () => {
        const options = {
            method: 'GET',
            url: 'https://rapidapi.p.rapidapi.com/search',
            params: {q: 'chicken'},
            headers: {
                'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
                'x-rapidapi-key': 'e6b41d1556msh40b6498c45cb201p1f841fjsndcd773a14aaf'
            }
        };

        axios.request(options).then(function (response) {
            // console.log(response.data);
        }).catch(function (error) {
            // console.error(error);
        });
    }

    render() {
        const { background } = this.state;
        var backgroundStyle = {
            backgroundImage: `url(${background.path})`
        };

        return (
            <div className="home">
                <div className="background" style={backgroundStyle}/>

                <div className="manuel-navbar">
                    <Navbar className="bar" bg="light" variant="light">
                        <Navbar.Brand href="/">Home</Navbar.Brand>
                        {/*<Nav.Link href="/popular">Popular</Nav.Link>*/}
                        <Nav.Link href="/ingredients">Ingredients</Nav.Link>
                        <Nav.Link href="/recipes">Recipes</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                    </Navbar>
                </div>

                <div className="nav-box-container">
                    <div className="nav-box">
                        <h1 className="nav-desc"> Breakfast</h1>
                        <Image className="nav-imag" src="../images/breakfast.jpg"  />
                        <Link to={{ pathname: `/recipes/${"Breakfast"}`,  state: true }}>
                            <Button variant="dark" size="lg" className="nav-button">
                                <span>Start Exploring Breakfast</span>
                            </Button>
                        </Link>
                    </div>
                    <div className="nav-box">
                        <h1 className="nav-desc"> Lunch </h1>
                        <Image className="nav-imag" src="../images/lunch.jpg"  />
                        <Link to={{ pathname: `/recipes/${"Lunch"}`,  state: true }}>
                            <Button variant="dark" size="lg" className="nav-button">
                                <span>Start Exploring Lunch</span>
                            </Button>
                        </Link>
                    </div>
                    <div className="nav-box">
                        <h1 className="nav-desc"> Dinner </h1>
                        <Image className="nav-imag" src="../images/lunch.jpg"  />
                        <Link to={{ pathname: `/recipes/${"Dinner"}`,  state: true }}>
                            <Button variant="dark" size="lg" className="nav-button">
                                <span>Start Exploring Dinner</span>
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;