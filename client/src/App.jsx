import React, { useState, useEffect } from "react";
import MainForm from "./FormStuff/Form.jsx";
import "./App.css";
import NavBar from "./NavBar/Nav.jsx";
import Posts from "./Posts/posts.jsx";

export default function app() {
  return (
    <>
      <div id="Main">
        <MainForm />
        <NavBar />
        <Posts />
        <p>Hello World</p>
      </div>
    </>
  );
}
