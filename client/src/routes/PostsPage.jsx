import React from "react";
import Posts from "../Posts/posts";
import "./PostsPage.css";
import NavBar from "../NavBar/Nav";

const PostsPage = () => {
  return (
    <div id="PostsPage">
      <NavBar />
      <Posts />
    </div>
  );
};

export default PostsPage;
