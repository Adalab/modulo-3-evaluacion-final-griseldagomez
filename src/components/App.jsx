import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";
import CharacterDetail from "./CharacterDetail";
import Filter from ".//Filter";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";



const App = () => {
  const [lists, setLists] = useState([]);
  const [filterInput, SetFilterInput] =useState ("")

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/.")
    .then((response) => response.json())
    .then((data) => {
          setLists(data.results);
  });
}, []);

const handleFilter = (value) => {
  SetFilterInput(value);
}

const filterName = lists.filter((character)=> {
  return character.name.toLowerCase().includes(filterInput.toLowerCase());
});

  return (
    <>
    <header>
      <h1>Rick and Morty</h1>
    </header>
    <Filter onChangeFilter={handleFilter}/>
    <main>
    <CharacterList characters={filterName}/>
    </main>
      <CharacterDetail/>
      </>
  );
};

export default App;