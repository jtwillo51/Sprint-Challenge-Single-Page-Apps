import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
      )
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list">
      <div className = "card-box">
        {characters.map(char => {
          console.log(char)
          return <CharacterCard  key={char.id} name = {char.name}
          status = {char.status}
          species = {char.species}
          image = {char.image} />
        })}
      </div>
    </section>
  );
}
