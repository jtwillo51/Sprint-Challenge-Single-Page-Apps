import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"

export default function SearchForm() {
 const [query, setQuery]= useState("")
 const [characters, setCharacters] = useState([])
 useEffect(() => {
 
  axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
    )
    .then(response => {
      const searchResults = response.data.results.filter(character=> {
        return character.name.toLowerCase().includes(query.toLowerCase())
      })
      setCharacters(searchResults)
    })
    .catch(err => {
      console.log(err);
    });
}, [query]);
  const changeHandler = event =>{
    setQuery(event.target.value);
  }

  return (
    <section className="search-form">
     <form className = "search">
       <input type = "text"
       onChange = {changeHandler}
       value = {query}
       name = "name"
       placeholder = "search by name"
       />
     </form>
     <div className="card-box">
        {characters.map(char => {
          
          return <CharacterCard  key={char.id} name = {char.name}
          status = {char.status}
          species = {char.species}
          image = {char.image} />
        })}
      </div>
    </section>
  );
}
