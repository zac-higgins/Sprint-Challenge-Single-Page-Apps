import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardImg, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        const people = res.data.results.filter(person => person.name.toLowerCase().includes(query.toLowerCase())
        )
        console.log("Here's the Rick & Morty api Data! ", res);
        setCharacters(people);
      })
      .catch(err => {
        console.log("Bummer, the data didn't return.", err);
      })
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="propmt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div>
        <h2>Characters</h2>
        <Container id="character-cards">
          <Row>
            {characters.map(character => {
              return (
                <Col xs="3" key={character.id}>
                  <Card className="character-card">
                    <CardImg src={character.image} alt={`${character.name}`} />
                    <CardBody>
                      <CardTitle>{character.name}</CardTitle>
                    </CardBody>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}