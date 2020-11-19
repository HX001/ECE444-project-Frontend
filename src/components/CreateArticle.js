import React from 'react';
import {ID, URL} from "../constants";
import Axios from "axios";
import ImageUploader from 'react-images-upload';
import {Link} from "react-router-dom";

class CreateArticle extends React.Component {

    // set constructor
    constructor(props) {
        super(props);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.state = {
            title:'',
            content:'',
            file: null,
            imageURL: "https://www.chopstickchronicles.com/wp-content/uploads/2020/03/Takoyaki-2020-update-34.jpg",
            rating: 5
        };
        this.onDrop = this.onDrop.bind(this);
    }



    //store title and content
    handleTitleChange(e){
        this.setState({title:e.target.value})
    }
    handleSubjectChange(e){
        this.setState({content:e.target.value})
    }

    handleImageChange(e){
        this.setState({imageURL:e.target.value})
    }

    handleBlogCreate = (e) =>{
        console.log("In create blog");
        console.log("Title: ", this.state.title)
        if(!this.state.title.toString()){
            alert("Title can not be empty!")
            return;
        }

        if(!localStorage.getItem(ID)){
            alert("Please Login before create articles")
            return;
        }
        const url = `${URL}/create/`;
        // let history = useHistory();

        Axios({
            method: 'POST',
            url: url,
            data: {
                imageURL: this.state.imageURL.toString(),
                title: this.state.title.toString(),
                content: this.state.content.toString(),
                username: localStorage.getItem(ID),
                rating: this.state.rating,
                file: this.state.file

            }
        })
            .then(
                response => { //print response
                    console.log("Response: ", response);
                    if (response.data.status === "fail") {
                        console.log("Response contains fail status");
                        alert("Create Failed")
                    } else {
                        console.log("gonna return");
                        alert("Create Successfully!")
                        return response.data;
                    }
                }
            )
            .catch(
                err => {
                    alert("Get Articles Failed");
                    console.log("Get Articles Failed: ", err);
                }
            )
    }

    // save uploaded image to state
    onDrop(picture, url){
        this.setState({file:picture})
        console.log(this.state.file)
    }

    //


    render() {
        return (
            <div className="form-area">
                <h4>Create New Article</h4>
                <form role="form">
                    <br styles="clear:both"/>
                    {/*title*/}
                    <div className="form-group">
                        <input type="text" className="form-control" id="title" name="title" placeholder="Title"
                               required
                               onChange={this.handleTitleChange}/>
                    </div>
                    {/*content*/}
                    <div className="form-group">
                        <textarea className="form-control" type="textarea" id="content" placeholder="Enter your content here..."
                                  maxLength="10000" rows="10"
                                  onChange={this.handleSubjectChange}></textarea>
                    </div>
                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose images'
                        onChange={this.onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        singleImage="singleImage"
                        withPreview={true}

                    />
                    <input type="text" className="form-control" id="imageURL" name="iamgeURL" placeholder="Image URL"
                           required
                           onChange={this.handleImageChange}/>


                    <Link to="/blogs/">
                        <button onClick={this.handleBlogCreate} type="button"
                                id="submit" name="submit" className="btn btn-primary pull-right">
                            Create
                        </button>

                        <button type="button" id="cancel" name="cancel" className="btn btn-primary pull-right">
                            Cancel
                        </button>
                    </Link>
                </form>
            </div>
        )

    }



}
export default CreateArticle;