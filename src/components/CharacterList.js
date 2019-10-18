import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log("Here's the Rick & Morty api Data! ", res);
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log("Bummer, the data didn't return.", err);
      })
  }, []);

  return (
    <section className="character-list">
      <h2>Characters</h2>
      {characters.map(character => {
        return (
          <div className="character-card" key={character.id}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={`${character.name}`} />
          </div>
        )
      })}
    </section>
  );
}
