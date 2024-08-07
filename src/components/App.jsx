import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";
import CharacterDetail from "./CharacterDetail";
import Filter from ".//Filter";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";



const App = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/.")
    .then((response) => response.json())
    .then((data) => {
          setLists(data.results);
  });
}, []);


  return (
    <>
    <header>
      <h1>Rick and Morty</h1>
    </header>
    <main>
    <CharacterList characters={lists}/>
    </main>
      <Filter />
      <CharacterCard />
      <CharacterDetail/>
      </>
  );
};

export default App;