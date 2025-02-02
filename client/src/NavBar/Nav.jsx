import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function NavBar() {
  return (
    <>
      <div id="NavBar">
        <Link to="/" id="NavHome">
          Home
        </Link>
        <Link to="/posts" id="NavPosts">
          Posts
        </Link>

        {/* <h1 id="NavImages">Images</h1> */}
      </div>
    </>
  );
}
