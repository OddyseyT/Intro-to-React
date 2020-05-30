import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import Character from "./components/Character"

const App = () => {
const [char, setChar] = useState([]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  axios.get("https://rickandmortyapi.com/api/character")
  .then(response => {
    console.log(response.data)
    setChar(response.data);
  }

  )
  .catch(err => {console.log("something went wrong")})

.then(() => {console.log("success")})

}, []);
console.log(char)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      

      <Character characterArray ={char}/>
    </div>

  );
}


export default App;
