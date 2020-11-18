import React from "react";
import { Link } from 'react-router-dom';

// article templates
function BlogItem(props) {
    console.log("In blog item:", props.path)


    function handleGenerateRating(rating) {
        var list="";
        for (var i = 0; i< rating; i++){
            list+="&hearts;"
        }
        return list;
    }

    return (
            <div className="blog_item">
                <Link className="blog_item_link"
                      to={{
                            pathname: `/articles/${props.path}`,
                            state: true
                            }}
                      style={{ textDecoration: 'none' }}>
                    {/*// article picture*/}
                    <figure className="blog_item_pic-wrap" data-category={props.label}>
                        <img src={props.src} alt=""
                             className="blog_item_img"/>
                    </figure>
                    {/*article information: title, ratings*/}
                    <div className="blog_item_info">
                        <h5 className="blog_item_text">{props.text}</h5>
                        {/*handleGenerateRating(props.rating).toString()*/}
                        <span className="rate"
                              >&hearts;&hearts;&hearts;&hearts;</span>
                    </div>
                </Link>
            </div>
        );
}
export default BlogItem;