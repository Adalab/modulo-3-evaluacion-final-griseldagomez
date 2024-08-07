import CharacterCard from "./CharacterCard";

function CharacterDetail({ character }) {
  if (character === undefined) {
    return (<p>Cargando...</p>);
  }

  return ( 
    <div>
      <CharacterCard character={character}/>
      <p>Status: {character.status}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Episodes: {character.episode.length}</p>
    </div>
  );
}

export default CharacterDetail;
