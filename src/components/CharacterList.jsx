import CharacterCard from './CharacterCard';

function CharacterList({ characters }) {
  return (
    <div >{characters.map((character) => (
      <CharacterCard   character={character} key={character.id}/>
    ))}</div>
  );
}

export default CharacterList;
