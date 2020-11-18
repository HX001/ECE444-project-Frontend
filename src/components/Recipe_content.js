import React, {useEffect, useState} from 'react';
import style from './Recipe.module.css';
import {ID, TOKEN_KEY, URL} from "../constants";
import Axios from "axios";

import {Card, ListGroup,ListGroupItem, Button, Form, Alert,  Badge, Modal, FormControl} from "react-bootstrap";
import { render } from '@testing-library/react';


const Recipe_content = ({recipes, title, calories, image, ingredients, dietLabels, healthLabels, url, source}) => {
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //localStorage.clear();
    const handleRecipesSave = (recipe) => {
        
        setShowAlert(true);
        console.log("Save button", recipe)

        var myUrl = url;

        localStorage.setItem(localStorage.length, JSON.stringify(myUrl.replace(/['"]+/g, '')));
        // alert("Saved Success, Check \"Saved Recipes\" for list")
        console.log("YES", myUrl.replace(/['"]+/g, ''));
        // save to local chrome cache, then read from cache again
        // const url = `${URL}/recipes/save`;
        // Axios({
        //     method: 'POST',
        //     url: url,
        //     data: {
        //         username: localStorage.getItem(ID),
        //         label: recipe.label,
        //         image: recipe.image,
        //         url: recipe.url
        //     }
        // })
        //     .then(
        //         response => {
        //             //TODO
        //             if (response.data.status === "fail") {
        //                 console.log("save not successful");
        //             } else {
        //                 console.log("save successful");
        //                 // need popup
        //             }
        //         }
        //     )
        //     .catch(
        //         err => {
        //             console.log("Login failed");
        //         }
        //     )
    }

    console.log("number of Ingredients: ", ingredients.length)
    
    return (
        
        <div className={style.recipe} >
            
            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <Badge pill variant="success">Labels</Badge> {healthLabels[0]}, {healthLabels[1]}
                </ListGroupItem>
                <ListGroupItem>
                    <Badge pill variant="success">Diet</Badge> {dietLabels}
                </ListGroupItem>
                <ListGroupItem>
                    <Badge pill variant="success">Calories</Badge> {(calories / 10).toFixed(0)}
                </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button variant="primary" onClick={handleShow}>
                    Ingredients
                </Button>{' '}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <ol>
                        {ingredients.map(ingredient =>(
                            <li>{ingredient.text}</li>
                        ))}
                    </ol>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Button variant="info" href = {url} target="_blank">
                    check me out
                </Button>{' '}
                
                <Button variant="info" onClick={ () => handleRecipesSave(recipes)}>
                    Save
                </Button> 

            </Card.Body>
            </Card>
            <Alert show={showAlert} variant="success">
                <Alert.Heading> Saved! </Alert.Heading>
                    Check "Saved Recipes" for list
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShowAlert(false)} variant="outline-success">
                        Close me
                    </Button>
                </div>
            </Alert>
        </div>
        
    );
};

render();

export default Recipe_content;