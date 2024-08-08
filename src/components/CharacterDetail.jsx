import CharacterCard from "./CharacterCard";
import "../scss/components/CharacterDetail.scss";
import { Link } from "react-router-dom";



function CharacterDetail({ character }) {
  if (character === undefined) {
    return (<p>Cargando...</p>);
  }

  return ( 
    <section className="container">
     
    <div className="text" >
      <Link to="/">Volver</Link>
      <CharacterCard  character={character}/>
      <p >Status: {character.status}</p>
      <p >Origin: {character.origin.name}</p>
      <p >Episodes: {character.episode.length}</p>
    </div>
    </section>
  );
}

export default CharacterDetail;
