import React, { useState, useEffect } from "react";
import MainForm from "./FormStuff/Form3.jsx";
import "./App.css";
import NavBar from "./NavBar/Nav.jsx";

export default function app() {
  return (
    <>
      <div id="Main">
        <MainForm />
        <NavBar />
        <p>Hello World</p>
      </div>
    </>
  );
}
