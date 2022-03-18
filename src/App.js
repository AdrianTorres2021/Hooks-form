import React, { useState } from "react";
import Form from "./Components.js/Form";
import Results from "./Components.js/Results";
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "", 
    lastName: "", 
    email: "", 
    password: "",
    confirmPassword: ""
  });
  return (
    <div className="App">
    <Form inputs = {state} setInputs = {setState} className="hello"/>
    <Results data = {state}/>
    </div>
  );
}

export default App;
