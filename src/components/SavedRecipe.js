import React, {useEffect, useState,Component} from 'react';
import {Form, Button, FormControl, ListGroup, Modal, ButtonGroup, ToggleButton, Alert, Badge} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Recipe_content from './Recipe_content';

import {backgrounds} from "../Background";
import {ingredientTypes} from "../data/Ingredients-Type";

import { browserHistory } from 'react-router'
//please install: npm survey-react

const SavedRecipe = (props) => {
    
    // FEATURE: a filtering option which will categorize recipes based on:
    // 1. calories
    // 2. number of ingredients
    // 3. time taken to cook

    const random = Math.floor(Math.random() * backgrounds.length);
    const background = backgrounds[random];
  
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const APP_ID = "20f1ff13"; //for edamam
    const APP_KEY = "03bebbf529983bfce2335582096b0dff"; //for edamam
    
    const [recipes, setRecipes] = useState([]);
    console.log("Le Recipe", recipes)
    
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('ice cream');

    useEffect(() => {
        getRecipes();
    }, [query]);
    
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        console.log(data);
        setRecipes(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();

        setQuery(search)
        setSearch(search);
        
        console.log("searching...", search)
        //setSearch('');
    }

    const backgroundStyle = {
        backgroundImage: `url(${background.path})`
    };

    var listOfList =[];
    for (var i = 0; i < localStorage.length; i++){

        
        console.log("=======================================================")
        listOfList[i] = localStorage.getItem(localStorage.key(i))
        console.log("we got: ", listOfList[i]);

    }

    return (


        // the "navbar" is required to be consistent accross all pages
        // Manuel-navbar is a configuration used to create the same search bar

        <div className="Recipe">
            <div className="background" style={backgroundStyle}/>
            
            <ListGroup as="ul">

                {listOfList.map(note => (<ListGroup.Item variant="success" action href={note.replace(/['"]+/g, '')} target="_blank">{note.replace(/['"]+/g, '')}</ListGroup.Item>))}
                
            </ListGroup>
            
            
        </div>
    );
};

export default SavedRecipe;