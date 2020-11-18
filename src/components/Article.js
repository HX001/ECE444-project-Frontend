import React, {Component, useEffect, useState} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Button, Form, FormControl} from "react-bootstrap";
import '../style/Article.css'
import {backgrounds} from "../Background";
import {ArticleList} from "../ArticleList";
import {ArticleItem, DisplayComments, LinearDeterminate} from "./ArticleItem";
import TextField from '@material-ui/core/TextField';
import article_info from "../data/ArticleContent";
import BlogItem from "./BlogItem";
import {ID, TOKEN_KEY, URL} from "../constants";
import Axios from "axios";


const Article = (props) => {
    const ariticleNumber = props.match.params.id;
    const [articles, setArticles] = useState([]);
    console.log("article ID is: ", ariticleNumber)

    //Since this is a hooks components and the articles need to be generated after user click a certain articles frm blogs
    //then the function of the get article need to be called automatically
    // In this case, the handleGetArticles need to be called by using different ways. (useEffect)
    useEffect(() => {
        handleGetArticle(ariticleNumber);
    }, []);


    // this function will be called automatically with a given article number, article number is unique in database
    const handleGetArticle = async (ariticleNumber) => {
        // ariticleNumber = '5fad975ddffdcf21094ac509';
        console.log("Article ID is: ", ariticleNumber)
        const url = `${URL}/articles/`;

        console.log("Here 1");
        console.log("URL is", url)
        Axios({
            method: 'POST',
            url: url,
            headers: {
                'crossDomain': true,
            },
            data: {
                title:ariticleNumber.toString()
            }
        })
            .then(
                response => { //print response
                    console.log("Response: ", response);
                    if (response.data.status === "fail") {
                        // console.log("Response contains fail status");
                    } else {
                        // console.log("Response contains success status");
                        setArticles([response.data]);
                        return response.data;
                    }
                }
            )
            .catch(
                err => {
                    console.log("Get Articles Failed: ", err);
                }
            )
    }

    return (

        <div className="articles">

            <head>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            </head>
            <div className="manuel-navbar">
                <Navbar className="bar" bg="light" variant="light">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/ingredients">Ingredients</Nav.Link>
                    <Nav.Link href="/recipes">Recipes</Nav.Link>
                    <Navbar.Brand href="/blogs">Blogs</Navbar.Brand>
                </Navbar>
            </div>
            <div>
                <div className="article_section">
                    {/*blog article contents*/}
                    {
                        articles.map(article =>
                            <ArticleItem
                                src={article.imageURL}
                                title={article.title}
                                rating={article.rating}
                                mainText={article.content}/>
                        )
                    }

                    {/*<ArticleItem*/}
                    {/*    src="https://www.takaski.com/wp-content/uploads/2015/08/Tokyo-Banana-Cake-Original-Miitsuketa-Made-in-Japan.jpg"*/}
                    {/*    title="21 Easy Banana Desserts"*/}
                    {/*    rating="&hearts;&hearts;&hearts;&hearts;"*/}
                    {/*    author="Author Name"*/}
                    {/*    mainText="Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat. Maecenas lorem. Pellentesque pretium lectus id turpis. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Fusce wisi. Phasellus faucibus molestie nisl. Fusce eget urna. Curabitur vitae diam non enim vestibulum interdum. Nulla quis diam. Ut tempus purus at lorem.*/}

                    {/*             Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat. Maecenas lorem. Pellentesque pretium lectus id turpis. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Fusce wisi. Phasellus faucibus molestie nisl. Fusce eget urna. Curabitur vitae diam non enim vestibulum interdum. Nulla quis diam. Ut tempus purus at lorem.*/}

                    {/*             Morbi a metus."*/}
                    {/*/>*/}
                </div>
            </div>
            <div className="linebreak">
                <LinearDeterminate/>
            </div>
            <div className="comment_section">
                <h3>Comments</h3>
                <div className="display_comments">

                    {/*{*/}
                    {/*    article_info.articles.map(article. =>*/}
                    {/*        <ArticleItem*/}
                    {/*            src={article.src}*/}
                    {/*            title={article.title}*/}
                    {/*            rating={article.rating}*/}
                    {/*            mainText={article.mainText}/>*/}
                    {/*    )*/}
                    {/*}*/}
                    <DisplayComments
                        userName="Nezuko"
                        avatar="https://i1.kknews.cc/SIG=3fkqf01/ctp-vzntr/q139s13n8q494on38p4751928qs4229s.jpg"
                        comment="Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat."
                    />
                    <DisplayComments
                        userName="Tanjirou"
                        avatar="https://cdn.anisearch.com/images/character/cover/full/81/81988.jpg"
                        comment="Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. "
                    />
                    <DisplayComments
                        userName="Muzan"
                        avatar="http://img.duoziwang.com/2019/08/03111416998672.jpg"
                        comment="Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna"
                    />
                    <DisplayComments
                        userName="Kanao"
                        avatar="https://moe.shikimori.one/system/characters/original/151142.jpg"
                        comment="Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Intege"
                    />
                </div>
                <div className="new_comment">
                    <h4>Rate this blog: &hearts;&hearts;&hearts;&hearts;</h4>
                    <form action="/" method="get">
                        {/*<textarea id="comment_content" rows="16" cols="50" className="write"/>*/}
                        <TextField
                            id="filled-multiline-static"
                            className="write"
                            multiline
                            rows={16}
                            cols={50}
                            defaultValue="Leave your comment here"
                            variant="filled"
                        />
                        <input type="submit" value="Submit" className="submit_button" onClick="show()"/>
                    </form>

                </div>


            </div>
        </div>


    );

}

export default Article;