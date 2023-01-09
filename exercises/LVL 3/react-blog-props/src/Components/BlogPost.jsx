import React from "react"

export default function BlogPost(props) {
    return (
    <div className="blog">
        <h4 className="blog-title">{props.blog.title}</h4>
        <h5 className="blog-subtitle">{props.blog.subTitle}</h5>
        <p className="blog-info">
            Posted by <a href="#">{props.blog.author}</a>
            on {props.blog.date}.
        </p>
    </div>
    )
}