import React from "react";
import{Route} from "react-router-dom"
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import SearchForm from "./components/SearchForm"

export default function App() {
  return (
    <main data-testid='app'>
      <Route path = "/" component = {Header}/>
      <Route exact path = "/" component = {WelcomePage}/>
      <Route path = "/characters/search" component = {SearchForm}/>
      <Route exact path = "/characters" component = {CharacterList}/>
    </main>
  );
}
