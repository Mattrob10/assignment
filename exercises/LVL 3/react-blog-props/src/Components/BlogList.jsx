import React from "react";
import BlogPost from "./BlogPost"
import data from "../data";

export default function BlogList() {

    const blogs = data.map(blog => {
        return (
          <BlogPost
            blog = {blog}
          />
        )
      })

    return (
        <div className="main-wrapper">
            <div className="content-wrapper">
                {blogs}
                <button>OLDER POSTS<i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
        )
}