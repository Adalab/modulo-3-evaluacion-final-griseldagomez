import CharacterCard from "./CharacterCard";
import "../scss/components/CharacterDetail.scss";


function CharacterDetail({ character }) {
  if (character === undefined) {
    return (<p>Cargando...</p>);
  }

  return ( 
    <div className="text" >
      <CharacterCard  character={character}/>
      <p >Status: {character.status}</p>
      <p >Origin: {character.origin.name}</p>
      <p >Episodes: {character.episode.length}</p>
    </div>
  );
}

export default CharacterDetail;
