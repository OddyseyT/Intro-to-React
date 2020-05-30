import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import {Label, Input } from "reactstrap";
import Character from "./components/Character"

const App = () => {
const [char, setChar] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const handleChange = e => {
  
  setSearchTerm(e.target.value)
  console.log(searchTerm)
}

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  axios.get("https://rickandmortyapi.com/api/character")
  .then(response => {
    console.log(response.data.results)
    const initialArr = response.data.results
    const filteredData = initialArr.filter( (character) => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase())
    }
    )

  setChar(filteredData)
    //setChar(response.data.results);
  },

  )
  .catch(err => {console.log("something went wrong", err)})

.then(() => {console.log("success")})

}, [searchTerm]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Label>Search for a character by name
          <Input type="text" value={searchTerm} onChange={handleChange}/>
          </Label>

      <Character characterArray ={char}/>
    </div>

  );
}


export default App;
