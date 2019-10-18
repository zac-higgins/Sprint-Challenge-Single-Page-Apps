import React, { useState } from "react";
import CharacterList from "./CharacterList";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <section className="search-form">
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
    </section>
  );
}
