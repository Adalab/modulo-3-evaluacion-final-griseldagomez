import Home from "./Home";
import CharacterDetail from "./CharacterDetail";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, matchPath } from "react-router-dom";

const App = () => {
  const [lists, setLists] = useState([]);
 

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
            setLists(data.results);
      });
  }, []);

  const { pathname } = useLocation();
  const detailRouteData = matchPath("/detail/:id", pathname);
  const characterId = detailRouteData !== null ? detailRouteData.params.id : "";
  const selectedCharacter = lists.find((character) => character.id == characterId);

  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home characters={lists} />} />
          <Route path="/detail/:id" element={<CharacterDetail character={selectedCharacter} />} />
        </Routes>
      </main>
    </>
  );
};

export default App;