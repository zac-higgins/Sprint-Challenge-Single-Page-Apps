import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <nav>
        <Link to="/">Welcome</Link>
        <Link to="/characters">Characters</Link>
      </nav>
      <Route exact path="/" component={WelcomePage} />
      {/* <Route exact path="/characters" component={SearchForm} /> */}
      <Route exact path="/characters" component={CharacterList} />
    </main>
  );
}
