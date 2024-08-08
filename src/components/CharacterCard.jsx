import "../scss/components/CharacterCard.scss";
import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <section>
        
    <div className="character">
      <p>
        <img src={character.image} alt={character.name} />
        <Link to={`/detail/${character.id}`}>
          {character.name}
        </Link>
      </p>
        <p>{character.species}</p>
    </div>
    </section>
  );
}

export default CharacterCard;
