import React, { useState, useEffect } from "react";
import MainForm from "./FormStuff/Form.jsx";
import "./App.css";

export default function app() {
  return (
    <>
      <div id="Main">
        <MainForm />
        <p>Hello World</p>
      </div>
    </>
  );
}
