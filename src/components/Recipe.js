import React, {useEffect, useState,Component} from 'react';
import {Form, Button, FormControl, Modal, InputGroup, ButtonGroup, ToggleButton, Alert, Badge} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Recipe_content from './Recipe_content';

import {backgrounds} from "../Background";
import {ingredientTypes} from "../data/Ingredients-Type";

import { browserHistory } from 'react-router'
//please install: npm survey-react

const Recipe = (props) => {
    
    // FEATURE: a filtering option which will categorize recipes based on:
    // 1. calories
    // 2. number of ingredients
    // 3. time taken to cook

    // const random = Math.floor(Math.random() * backgrounds.length);
    console.log("length is ", ingredientTypes.itinerary.length)
    console.log(ingredientTypes)
    const background = backgrounds[1];
  
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const APP_ID = "20f1ff13"; //for edamam
    const APP_KEY = "03bebbf529983bfce2335582096b0dff"; //for edamam
    
    const [recipes, setRecipes] = useState([]);
    var dummy = props.match.params.id;
  
    if(dummy != ':id'){
        dummy = props.match.params.id;
    } else{
        dummy = '';
    }
    const [search, setSearch] = useState(dummy);
    const [query, setQuery] = useState(dummy);
    
    // select Ingredient: contains a string which has a food ingredient
    // clickFlag true if the user clicks an ingredient
    const selectIngredient = props.match.params.id;
    const clickFlag = props.location.state;
    var clicked = clickFlag;

    if(props != null){
        console.log("In recipes");
        console.log("data1", selectIngredient)
        console.log("data2", clickFlag)

    }

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

        if(clicked){
            setQuery(selectIngredient)
            clicked = false;
            
            console.log("not clicked: ", clickFlag)
            //clickFlag = false;
        } else{
            setQuery(search)
            setSearch(search);
        }
        
        
        console.log("searching...", search)
        //setSearch('');
    }

    const backgroundStyle = {
        backgroundImage: `url(${background.path})`
    };

    const [timeValue, setTimeValue] = useState('1000000');

    const times = [
      { name: '30 minutes', value: '30' },
      { name: '1 hour', value: '60' },
      { name: '2 hour', value: '120' },
      { name: 'infinite', value: '1000000' },
    ];

    const [calorieValue, setCalorieValue] = useState('1000000');

    const calories = [
      { name: '<100 Cal', value: '1000' },
      { name: '<500 Cal', value: '5000' },
      { name: 'no diet', value: '1000000' },
    ];

    const [numValue, setNumValue] = useState('1000000');

    const nums = [
      { name: '<5 items', value: '5' },
      { name: '<10 items', value: '10' },
      { name: 'no budget', value: '1000000' },
    ];

    const [shows, setShows] = useState(true);
  
    return (


        // the "navbar" is required to be consistent accross all pages
        // Manuel-navbar is a configuration used to create the same search bar

        <div className="Recipe">
            <div className="background" style={backgroundStyle}/>

            <div className="manuel-navbar">
                <Navbar className="bar" bg="light" variant="light">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/ingredients">Ingredients</Nav.Link>
                    <Navbar.Brand href="/recipes">Recipes</Navbar.Brand>
                    <Nav.Link href="/blogs">Blogs</Nav.Link>

                    <Nav className="mr-auto">
                        <Form inline>
                            <Button variant="outline-success" onClick={handleShow} placement="right">
                                Filter My Recipes
                            </Button>
                        </Form>
                    </Nav>
                    {/*<Nav className="mr-auto">*/}
                    {/*    <Form inline>*/}
                    {/*        <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                    {/*        <Button variant="outline-info">Search</Button>*/}
                    {/*    </Form>*/}
                    {/*</Nav>*/}
                </Navbar>
            </div>

            <div>

                <form onSubmit={getSearch} className="Search-form">
                    <input className="search-bar" placeholder="Search" type="text" value={search} onChange={updateSearch}/>
                    <button className="search-button" type="submit">
                        search
                    </button>
                </form>
            </div>

            
            <br />
            <br />
            <br />
            <br />
            <br />
            
            

            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Filter Search for "{search}"</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Badge pill variant="success">
                        Time
                    </Badge>{' '}
                    <br />
                    <ButtonGroup toggle>
                        {times.map((time, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={time.value}
                            checked={timeValue === time.value}
                            onChange={(e) => setTimeValue(e.currentTarget.value)}
                        >
                            {time.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <br />
                    <br />
                    <Badge pill variant="success">
                        Calories
                    </Badge>{' '}
                    <br />
                    <ButtonGroup toggle>
                        {calories.map((calorie, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={calorie.value}
                            checked={calorieValue === calorie.value}
                            onChange={(e) => setCalorieValue(e.currentTarget.value)}
                        >
                            {calorie.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <br />
                    <br />
                    <Badge pill variant="success">
                        # of Ingredients
                    </Badge>{' '}
                    <br />
                    <ButtonGroup toggle>
                        {nums.map((num, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={num.value}
                            checked={numValue === num.value}
                            onChange={(e) => setNumValue(e.currentTarget.value)}
                        >
                            {num.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                
                    </Modal.Body>
                    <Modal.Footer>

                    <Button variant="warning" onClick={handleClose}>
                        Close
                    </Button>
                    
                    </Modal.Footer>
                </Modal>
            </>
            
            <div className="recipes">
            
                {recipes.filter(food => ((food.recipe.calories < calorieValue) && (food.recipe.totalTime < timeValue) && (food.recipe.ingredients.length < numValue))).map(recipe =>(

                    <Recipe_content
                    // key={recipe.recipe.label}
                        recipes={recipe}
                    title={recipe.recipe.label}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                    calories={recipe.recipe.calories}
                    dietLabels={recipe.recipe.dietLabels}
                    healthLabels={recipe.recipe.healthLabels}
                    url={recipe.recipe.url}
                    source={recipe.recipe.source}

                    />
                ))}


            </div>
        </div>
    );
};

export default Recipe;