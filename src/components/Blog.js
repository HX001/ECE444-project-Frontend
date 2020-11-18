import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Button, Form, FormControl} from "react-bootstrap";
import BlogItem from "./BlogItem";
import '../style/Blog.css'

import CreateArticle from "./CreateArticle";
import blogs_info from "../data/articles";
import {sanitizeHtml} from "bootstrap/js/src/tools/sanitizer";
import {backgrounds} from "../Background";
import {ID, TOKEN_KEY, URL} from "../constants";
import Axios from "axios";

class Blog extends Component {
    constructor() {
        super();
        const random = Math.floor(Math.random() * backgrounds.length);
        // console.log("length is ", backgrounds.length)
        // console.log(backgrounds)
        const background = backgrounds[random];


        this.state = {
            background: background,
            blogs_info: blogs_info.articles
        }
    }

    // get all the article information in db
    //Since this blog page need to be called at the time when user click the blog components, so at the time user click the blogs, front end need
    //to send the request to the backend to get the list of the blogs - Hong
     componentDidMount() {
        const url = `${URL}/blogs/`;
        Axios({
            method: 'POST',
            url: url,
            data: {
                "username": localStorage.getItem(ID)
            }
        })
            .then(
                response => { //print response
                    console.log("Response: ", response);;
                    this.setState({blogs_info: response.data})
                    console.log("Clicked !!!!!! Ingredient: ", this.state.blogs_info)
                    return response.data;

                }
            )
            .catch(
                err => {
                    console.log("Get Articles Failed: ", err);
                }
            )
    }

    // handleArticles = (blogs_info) => {
    //     let result = [];
    //
    //     for (var i = 0; i < blogs_info.length; i++){
    //         let article = blogs_info[i];
    //         const id = article._id.$oid;
    //         console.log("id is: ", id)
    //         result.push(<BlogItem
    //             src={article.imageURL}
    //             text={article.title}
    //             label="Article"
    //             rating={article.rating}
    //             // _id: {$oid: "5fae11b077e74277bdbbbd5e"}
    //             path={id}/>)
    //     }
    //     return result;
    // }

    render() {
        const { background, blogs_info} = this.state;
        var backgroundStyle = {
            backgroundImage: `url(${background.path})`
        };

        return (
            <div className="blogs">
                {/*navigation bar*/}
                <div className="background" style={backgroundStyle}/>
                <div className="manuel-navbar">
                    <Navbar className="bar" bg="light" variant="light">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/*<Nav.Link href="/popular">Popular</Nav.Link>*/}
                        <Nav.Link href="/ingredients">Ingredients</Nav.Link>
                        <Nav.Link href="/recipes">Recipes</Nav.Link>
                        <Navbar.Brand href="/blogs">Blogs</Navbar.Brand>
                        <Button variant="outline-info" className="create_button"
                                href="/create">Create New Blog</Button>
                    </Navbar>
                </div>

                {/*article contents*/}
                <div>
                    <div className="blog_section">
                        {
                            blogs_info.map(article =>
                                <BlogItem
                                    src={article.imageURL}
                                    text={article.title}
                                    label="Article"
                                    rating={article.rating}
                                    path={article.title}/>
                            )
                        }
                    </div>
                </div>
            </div>

        );
    }
}

export default Blog;