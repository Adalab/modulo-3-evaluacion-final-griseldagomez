import Filter from ".//Filter";
import CharacterList from "./CharacterList";
import { useState } from "react";

function Home({ characters }) {
    const [filterInput, SetFilterInput] = useState ("");

    const handleFilter = (value) => {
        SetFilterInput(value);
    };
    
    const filterName = characters.filter((character)=> {
        return character.name.toLowerCase().includes(filterInput.toLowerCase());
    });
    
    return (
        <>
            <Filter onChangeFilter={handleFilter}/>
            <CharacterList characters={filterName}/>
        </>
    );
}

export default Home;
