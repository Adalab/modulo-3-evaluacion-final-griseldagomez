import CharacterList from ".//CharacterList";
import CharacterCard from ".//CharacterCard";
import CharacterDetail from ".//CharacterDetail";
import Filter from ".//Filter";

import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Filter />
      <CharacterList/>
      <CharacterCard />
      <CharacterDetail/>
      </>
  );
};

export default App;